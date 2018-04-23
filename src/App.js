import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
// import { Route } from 'react-router-dom';
import Loading from './components/Loading';
import LoadingPictures from './components/LoadingPictures';
import Content from './components/Content';
import MouseShadow from './components/MouseShadow';
import logo from './img/icons/logo.svg';
import hero from './img/projets/ambroselli-io/ambroselli-black.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      durations: {
        writing: 4,
        transition: 0.5,
        timeout: 1
      },
      loading: true,
      writingIsOver: false,
      transitionIsChosen: false,
      transition: null,
      colors: {
        '--bgColor': `rgba(${process.env.REACT_APP_THEME_BLACK_BACKGROUND_COLOR})`,
        '--transBgColor': `rgba(${process.env.REACT_APP_THEME_BLACK_BACKGROUND_COLOR_TRANS})`,
        '--mainFontColor': `rgba(${process.env.REACT_APP_THEME_BLACK_FOREGROUND_COLOR})`,
        '--buttonColor': `rgba(${process.env.REACT_APP_THEME_BLACK_FOREGROUND_COLOR})`,
        '--loadingFontColor': `rgba(${process.env.REACT_APP_THEME_BLACK_FOREGROUND_COLOR})`,
        '--descColor': `rgba(${process.env.REACT_APP_THEME_BLACK_FOREGROUND_SECONDARY_COLOR})`
      },
      theme: 'black',
      initialTheme: 'black',
    };

    this.handleLoadingStatus = this.handleLoadingStatus.bind(this);
    this.handleColors = this.handleColors.bind(this);
    this.handleWritingIsOver = this.handleWritingIsOver.bind(this);
    this.handleMouseShadowFinito = this.handleMouseShadowFinito.bind(this);
  }

  async handleLoadingStatus(bool, transition) {
    await this.setState({ transition: transition });
    this.setState({ loading: bool });
  }

  handleColors(colors, theme) {
    const { bgColor, mainFontColor } = colors;
    this.setState({ theme: theme })
    this.setState({ colors: {
      '--bgColor': `rgba(${bgColor[0]},${bgColor[1]},${bgColor[2]},${bgColor[3]})`,
      '--transBgColor': `rgba(${bgColor[0]},${bgColor[1]},${bgColor[2]},0.6)`,
      '--mainFontColor': `rgba(${mainFontColor[0]},${mainFontColor[1]},${mainFontColor[2]},${mainFontColor[3]})`,
      '--buttonColor': `rgba(${mainFontColor[0]},${mainFontColor[1]},${mainFontColor[2]},${mainFontColor[3]})`,
      '--loadingFontColor': `rgba(${mainFontColor[0]},${mainFontColor[1]},${mainFontColor[2]},${mainFontColor[3]})`,
      '--descColor': `rgba(${mainFontColor[0]},${mainFontColor[1]},${mainFontColor[2]},${mainFontColor[3]})`
    }})
  }

  handleWritingIsOver(bool) {
    this.setState({ writingIsOver: bool })
  }

  handleMouseShadowFinito(bool) {
    this.setState({ transitionIsChosen: bool })
  }

  componentWillMount() {
    const theme = this.props.match.params.colorId;
    this.setState({ timeout: 2 * this.state.transition });
    this.setState({ theme: theme });
    this.setState({ initialTheme: theme });
    if (theme === 'black') {
      this.setState({ colors: {
        '--bgColor': `rgba(${process.env.REACT_APP_THEME_BLACK_BACKGROUND_COLOR})`,
        '--transBgColor': `rgba(${process.env.REACT_APP_THEME_BLACK_BACKGROUND_COLOR_TRANS})`,
        '--mainFontColor': `rgba(${process.env.REACT_APP_THEME_BLACK_FOREGROUND_COLOR})`,
        '--buttonColor': `rgba(${process.env.REACT_APP_THEME_BLACK_FOREGROUND_COLOR})`,
        '--loadingFontColor': `rgba(${process.env.REACT_APP_THEME_BLACK_FOREGROUND_COLOR})`,
        '--descColor': `rgba(${process.env.REACT_APP_THEME_BLACK_FOREGROUND_SECONDARY_COLOR})`
      }})
    } else {
      this.setState({ colors: {
        '--bgColor': `rgba(${process.env.REACT_APP_THEME_WHITE_BACKGROUND_COLOR})`,
        '--transBgColor': `rgba(${process.env.REACT_APP_THEME_WHITE_BACKGROUND_COLOR_TRANS})`,
        '--mainFontColor': `rgba(${process.env.REACT_APP_THEME_WHITE_FOREGROUND_COLOR})`,
        '--buttonColor': `rgba(${process.env.REACT_APP_THEME_WHITE_FOREGROUND_COLOR})`,
        '--loadingFontColor': `rgba(${process.env.REACT_APP_THEME_WHITE_FOREGROUND_COLOR})`,
        '--descColor': `rgba(${process.env.REACT_APP_THEME_WHITE_FOREGROUND_SECONDARY_COLOR})`
      }})
    }

  }


  render() {

    // console.log('this.props.location.key', this.props.location.key);

    const durationsInline = { 
          '--writingDuration': this.state.durations.writing,
          '--transitionDuration': this.state.durations.transition,
          '--leavingTimeOut': this.state.durations.timeout,
        }

    return (
      <div className={`App ${this.state.theme}`} style={{...durationsInline, ...this.state.colors}}>
        <Helmet>
          {/*<meta name="csrf-token" content="QOQMsvl4zbk2Pme4EMflnX6Rz3Ay8TBaleFkmw4f/xj/rjjRTBaY1SCxYbZloVkzLDwwd/4/VMiHB1XrUZXzeA==">*/}

          {/*<!-- COMMON TAGS -->*/}
          <title>
            Arnaud Ambroselli | Développeur d'applications web
          </title>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href={logo} type="image/jpg" />
          {/*<!-- Search Engine -->*/}
          <meta
            name="description"
            content="Développeur d'applications web"
          />
          <meta name="image" content={hero} />
          {/*<!-- Schema.org for Google -->*/}
          <meta itemprop="name" content="Arnaud Ambroselli" />
          <meta
            itemprop="description"
            content="Développeur d'applications web"
          />
          <meta itemprop="image" content={hero} />
          {/*<!-- Open Graph general (Facebook, Pinterest & Google+) -->*/}
          <meta property="og:title" content="Arnaud Ambroselli" />
          <meta
            property="og:description"
            content="Développeur d'applications web"
          />
          <meta
            property="og:image"
            content={`https://ambroselli.io${hero}`}
          />
          <meta
            property="og:url"
            content="https://ambroselli.io/"
          />
          <meta
            property="og:site_property"
            content="Arnaud Ambroselli | Développeur d'applications web"
          />
          <meta property="og:locale" content="fr_FR" />
          <meta property="og:type" content="article" />
          <meta
            name="keywords"
            content="arnaud,arnaud+ambroselli,developer,web+developer,web+app+developer,web+development,website,webapp,react,react.js,reactJS,vanilla+javascript,vanilla+js,transitions,transitions+css,css+60FPS,60FPS,svg"
          />
          <meta property="twitter:title" content="Arnaud Ambroselli" />
          <meta
            property="twitter:description"
            content="Développeur d'applications web"
          />
          <meta
            property="twitter:image"
            content={`https://ambroselli.io${hero}`}
          />
          <meta
            property="twitter:url"
            content="https://ambroselli.io/"
          />
          <link
            rel="canonical"
            href="https://ambroselli.io/"
          />
        </Helmet>
        {this.state.loading && 
          <React.Fragment>
            <Loading 
              animationOnGoing={this.handleLoadingStatus}
              transitionChosen={this.handleMouseShadowFinito}
              movingDuration={this.state.durations.transition}
              writingDuration={this.state.durations.writing}
              timeoutDuration={this.state.durations.timeout}
              writingIsOver={this.handleWritingIsOver}
              theme={this.state.initialTheme}/>
            <LoadingPictures />
          </React.Fragment>
        }
        {!this.state.loading && 
          <Content 
          durations={this.state.durations}
          transitionType={this.state.transition}
          location={this.props.location}
          history={this.props.history}
          changeColors={this.handleColors}
          initialTheme={this.state.initialTheme}
          theme={this.state.theme}/>
        }
        {this.state.writingIsOver && 
        <MouseShadow 
          start={!this.state.transitionIsChosen && this.state.writingIsOver}
          duration={this.state.durations.transition }
        />}
      </div>
    );
  }
}

export default App;
