import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './css/styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter basename={`${process.env.REACT_APP_BASENAME}`}>
        <Switch>
          <Route path="/:colorId" render={({ match, location, history }) => <App location={location} history={history} match={match}/>} />
          <Route path="/" render={() => <Redirect to="/black/" />}/>
        </Switch>
      </BrowserRouter>
      )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
