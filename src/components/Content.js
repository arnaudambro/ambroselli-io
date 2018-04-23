import React from 'react';
// import PropTypes from 'prop-types';
import SVGInline from "react-svg-inline";
import arrowRight from '../img/icons/arrow-right.svg';
import arrowLeft from '../img/icons/arrow-left.svg';

import { withRouter, /*NavLink,*/ Route, Switch } from 'react-router-dom';
import Projets from './Projets';
import Contact from './Contact';
import Projet from './Projet';
import Button from './Button';
import ButtonColor from './ButtonColor';
import pictures from '../data/pics';
import ReactTimeout from 'react-timeout'
import { TransitionGroup, CSSTransition } from "react-transition-group";


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projet: 0,
      loadProjet: false,
      prepareProjet: false,
      showContact: false,
      toggleContent: false,
      firstTime: true
    };

    this.handleClickOnMenu = this.handleClickOnMenu.bind(this);
    this.handleClickOnArrowLeft = this.handleClickOnArrowLeft.bind(this);
    this.handleClickOnArrowRight = this.handleClickOnArrowRight.bind(this);
    this.handleClickOnProjet = this.handleClickOnProjet.bind(this);
    this.handleFirstTimeOver = this.handleFirstTimeOver.bind(this);
    this.handleChangeColors = this.handleChangeColors.bind(this);

  }

  componentWillMount() {
    this.setState({ transitionType: this.props.transitionType })
  }

  handleFirstTimeOver() {
    this.setState({ firstTime: false });
  }

  handleClickOnMenu(e) {
    e.persist();
    this.setState({ toggleContent: true });

    const contact = e.target.classList.value.includes('contact');
    if (contact && this.state.showContact) {
      e.preventDefault();
      return;
    } else if (!contact && !this.state.showContact) {
      e.preventDefault();
      return;  
    }

    this.props.setTimeout(() => {
      contact ? this.props.history.push(`/${this.props.initialTheme}/contact`) : this.props.history.goBack();
      this.setState({ showContact: e.target.classList.value.includes('contact') });
    },this.props.durations.transition * 150) ;

    this.props.setTimeout(() => {
    },this.props.durations.transition * 1150);

  }
  handleClickOnArrowLeft(e) {
    this.setState({ toggleContent: false });

    const numberOfProjets = Object.keys(pictures).length;
    const lastProjet = numberOfProjets -  1;
    let actualProjet = parseInt(this.state.projet, 10);
    if (actualProjet === 0) {
      this.setState({ projet: lastProjet })
    } else {
      this.setState({ projet: actualProjet - 1 })
    }

    this.props.setTimeout(() => {
      this.props.history.push(`/${this.props.initialTheme}/projets/${this.state.projet}`);
    },this.props.durations.transition * 150) ;

  }
  handleClickOnArrowRight(e) {
    this.setState({ toggleContent: false });

    const numberOfProjets = Object.keys(pictures).length;
    const lastProjet = numberOfProjets -  1;
    let actualProjet = parseInt(this.state.projet, 10);
    if (actualProjet === lastProjet) {
      this.setState({ projet: 0 })
    } else {
      this.setState({ projet: actualProjet + 1 })
    }

    this.props.setTimeout(() => {
      this.props.history.push(`/${this.props.initialTheme}/projets/${this.state.projet}`);
    },this.props.durations.transition * 150) ;
  }

  handleChangeColors(colors, theme) {
    this.props.changeColors(colors, theme)
  }

  handleClickOnProjet(prepare, load, projet) {
    this.setState({ prepareProjet: prepare })
    this.setState({ loadProjet: load })
    this.setState({ projet: parseInt(projet, 10) })
  }




  render() {

    const { durations, location, theme, initialTheme } = this.props;
    const { loadProjet, prepareProjet, showContact, transitionType, toggleContent, firstTime } = this.state;
    const projet = parseInt(this.state.projet, 10)
    const grouped = transitionType === 'grouped';
    const separated = transitionType === 'separated';
    // const opacity = transitionType === 'opacity';
    // const lastProjet = Object.keys(pictures).length - 1;

    return(


      <div 
        className={`content ${grouped ? 'grouped' : ''}`}
        style={{ '--transitionDuration': durations.transition }}>

        <Button 
          classes={`projets-button menu__item menu__item--top ${separated ? 'enter-from-down' : ''}`} 
          active={!showContact} 
          content="projets" 
          onclick={this.handleClickOnMenu} />
        <Button 
          classes={`contact-button menu__item menu__item--bottom ${separated ? 'enter-from-up' : ''}`}
          active={showContact}
          content="contact" 
          onclick={this.handleClickOnMenu} />
        <div className={`button__color ${separated ? 'enter-from-left' : ''}`}>
          <ButtonColor 
            url={this.props.location.pathname}
            colors={{ 
              bgColor: [...process.env.REACT_APP_THEME_WHITE_BACKGROUND_COLOR.split(',')], 
              mainFontColor: [...process.env.REACT_APP_THEME_WHITE_FOREGROUND_COLOR.split(',')]}} 
            changeColors={this.handleChangeColors}
            theme={'white'}/>
          <ButtonColor 
            url={this.props.location.pathname}
            colors={{ 
              bgColor: [...process.env.REACT_APP_THEME_BLACK_BACKGROUND_COLOR.split(',')], 
              mainFontColor: [...process.env.REACT_APP_THEME_BLACK_FOREGROUND_SECONDARY_COLOR.split(',')]}} 
            changeColors={this.handleChangeColors}
            theme={'black'}/>
        </div>

        <SVGInline
          className={`menu__arrow menu__arrow--arrowLeft ${showContact ? 'fade-out ' : ' '}${separated && firstTime ? 'enter-from-right active' : 'fade-in'}`} 
          onClick={this.handleClickOnArrowLeft} 
          svg={ arrowLeft } />
        <SVGInline
          className={`menu__arrow menu__arrow--arrowRight ${showContact ? 'fade-out ' : ' '}${separated && firstTime ? 'enter-from-left active' : 'fade-in'}`} 
          onClick={this.handleClickOnArrowRight} 
          svg={ arrowRight } />

        <TransitionGroup className="main">
          <CSSTransition 
            key={location.key} 
            classNames={`${toggleContent ? 'fade' : 'explode'}`} 
            timeout={durations.transition * (toggleContent ? 2000 : 1000)}>
            <Switch location={location} >
              <Route path={`/${initialTheme}/projets/:id`} render={( {match} ) => (
                <Projets 
                  durations={durations.transition} 
                  movingTransition={transitionType} 
                  match={match}
                  prepareProjet={this.handleClickOnProjet}
                  loadProjet={this.handleClickOnProjet}
                  firstTime={firstTime}
                  firstTimeOver={this.handleFirstTimeOver}
                  theme={theme}/>
              )}/>
              <Route path={`/${initialTheme}/contact`} render={() => <Contact />}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>

        {prepareProjet && <Projet 
          projet={projet} 
          theme={theme}
          inProp={loadProjet}
          timeout={durations.timeout}
          leaving={this.handleClickOnProjet}/>}
      </div>

      )
  }
}

Content.propTypes = {
};

export default withRouter(ReactTimeout(Content));
