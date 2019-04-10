import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  Menu,
  Responsive,
  Image,
  Grid,
  Button,
  Container
} from 'semantic-ui-react';
import { navUsers } from './_data';

class Nav extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired
  };
  handleLogout = e => {
    e.preventDefault();
    this.props.onLogout();
  };

  render() {
    const { user } = this.props;

    return (
      <Container>
        <Responsive as={Menu} minWidth={651} pointing secondary>
          <Menu.Item name="home" as={NavLink} to="/" exact />
          <Menu.Item name="new poll" as={NavLink} to="/add" />
          <Menu.Item name="leader board" as={NavLink} to="/leaderboard" />
          <Menu.Menu position="right">
            <Menu.Item>
              <span>
                <Image
                  src={`/images/avatars/${navUsers[user].avatar.name}.png`}
                  avatar
                  spaced="right"
                  verticalAlign="bottom"
                />
                {navUsers[user].name}
              </span>
            </Menu.Item>
            <Menu.Item>
              <Button
                content="Logout"
                labelPosition="right"
                basic
                compact
                icon="log out"
                size="mini"
                onClick={this.handleLogout}
              />
            </Menu.Item>
          </Menu.Menu>
        </Responsive>
        <Responsive as={Fragment} minWidth={375} maxWidth={650}>
          <Grid columns={2} padded="vertically">
            <Grid.Row>
              <Grid.Column>
                <Image
                  src={`/images/avatars/${navUsers[user].avatar.name}.png`}
                  avatar
                  spaced="right"
                  verticalAlign="bottom"
                />
                {navUsers[user].name}
              </Grid.Column>
              <Grid.Column verticalAlign="bottom" textAlign="right">
                <Button
                  content="Logout"
                  labelPosition="right"
                  basic
                  compact
                  icon="log out"
                  size="mini"
                  onClick={this.handleLogout}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Menu pointing secondary widths={3}>
                  <Menu.Item name="home" as={NavLink} to="/" exact />
                  <Menu.Item name="new poll" as={NavLink} to="/add" />
                  <Menu.Item
                    name="leader board"
                    as={NavLink}
                    to="/leaderboard"
                  />
                </Menu>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
        <Responsive as={Fragment} maxWidth={374}>
          <Grid padded="vertically" columns={1}>
            <Grid.Row>
              <Grid.Column>
                <Image
                  src={`/images/avatars/${navUsers[user].avatar.name}.png`}
                  avatar
                  spaced="right"
                  verticalAlign="bottom"
                />
                {navUsers[user].name}
                <Button
                  content="Logout"
                  labelPosition="right"
                  basic
                  compact
                  icon="log out"
                  size="mini"
                  floated="right"
                  onClick={this.handleLogout}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Menu pointing secondary widths={3}>
                  <Menu.Item name="home" as={NavLink} to="/" exact />
                  <Menu.Item name="new poll" as={NavLink} to="/add" />
                  <Menu.Item
                    name="leader board"
                    as={NavLink}
                    to="/leaderboard"
                  />
                </Menu>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </Container>
    );
  }
}

export default Nav;
