import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import Login from './Login';
import Nav from './Nav';
import Home from './Home';
import UserCard from './UserCard';
import NewPoll from './NewPoll';
import Leaderboard from './Leaderboard';
import NoMatch from './NoMatch';

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    const { authUser } = this.props;
    return (
      <Router>
        <div className="App">
          {authUser === null ? (
            <Route
              render={() => (
                <ContentGrid>
                  <Login />
                </ContentGrid>
              )}
            />
          ) : (
            <Fragment>
              <Nav />
              <ContentGrid>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/questions/bad_id" component={NoMatch} />
                  <Route path="/questions/:question_id" component={UserCard} />
                  <Route path="/add" component={NewPoll} />
                  <Route path="/leaderboard" component={Leaderboard} />
                  <Route component={NoMatch} />
                </Switch>
              </ContentGrid>
            </Fragment>
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

function mapStateToProps({ authUser }) {
  return {
    authUser
  };
}

export default connect(
  mapStateToProps,
  { handleInitialData }
)(App);
