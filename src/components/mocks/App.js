import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { questionData } from '../mocks/_data';
import Nav from '../mocks/Nav';
import Home from '../mocks/Home';
import NewPoll from '../mocks/NewPoll';
import Leaderboard from '../mocks/Leaderboard';
import Login from '../mocks/Login';
import NoMatch from '../mocks/NoMatch404';
import PollContainer from '../mocks/PollContainer';

class App extends Component {
  state = {
    authUser: false,
    showResult: false,
    user: ''
  };
  handleLogin = user => {
    this.setState({
      authUser: true,
      user
    });
  };
  handleLogout = () => {
    this.setState({ authUser: false });
  };
  setResult = showResult => {
    this.setState({
      showResult: showResult
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          {this.state.authUser === true ? (
            <Fragment>
              <Nav onLogout={this.handleLogout} user={this.state.user} />
              <ContentGrid>
                <AppRoutes
                  setResult={this.setResult}
                  showResult={this.state.showResult}
                />
              </ContentGrid>
            </Fragment>
          ) : (
            <Route
              render={() => (
                <Fragment>
                  <ContentGrid>
                    <Login onLogin={this.handleLogin} />
                  </ContentGrid>
                </Fragment>
              )}
            />
          )}
        </div>
      </Router>
    );
  }
}

const ContentGrid = ({ children }) => (
  <Grid padded="vertically" columns={1} centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 550 }}>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);

const AppRoutes = props => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => <Home onSetResult={props.setResult} />}
    />
    <Route
      path="/questions/:question_id"
      render={() => (
        <PollContainer {...questionData} showResult={props.showResult} />
      )}
    />
    <Route path="/add" component={NewPoll} />
    <Route path="/leaderboard" component={Leaderboard} />
    <Route component={NoMatch} />
  </Switch>
);

export default App;
