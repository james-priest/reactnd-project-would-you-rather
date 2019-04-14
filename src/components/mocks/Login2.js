import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Segment,
  Grid,
  Header,
  Image,
  Form,
  Loader,
  Dimmer
} from 'semantic-ui-react';
import { navUsers } from './_data';

export class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired
  };
  state = {
    loading: false
  };
  handleLoading = () => {
    this.setState({ loading: true });
  };

  render() {
    return (
      <Fragment>
        <Segment.Group>
          <LoginHeader />
          <LoginGridLayout
            image={<BrandImage />}
            form={
              <LoginForm
                onLogin={this.props.onLogin}
                onLoading={this.handleLoading}
              />
            }
            loading={this.state.loading}
          />
        </Segment.Group>
        <footer className="footer">
          <a href="https://www.freepik.com/free-photos-vectors/design">
            Avatar characters created by freepik - www.freepik.com
          </a>
        </footer>
      </Fragment>
    );
  }
}

const LoginHeader = () => (
  <Header as="h4" block attached="top" textAlign="center">
    <Header.Content>Welcome to the Would You Rather App!</Header.Content>
    <Header.Subheader>Please sign in to continue</Header.Subheader>
  </Header>
);

const LoginGridLayout = ({ image, form, loading }) => (
  <div>
    <Grid padded textAlign="center">
      <Grid.Row className="login">
        <Grid.Column width={16}>
          {loading === true && (
            <Dimmer active inverted>
              <Loader inverted content="Loading" />
            </Dimmer>
          )}
          {image}
          <br />
          {form}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

const BrandImage = () => (
  <Image src="/images/avatars/animals.png" size="medium" centered />
);

class LoginForm extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    onLoading: PropTypes.func.isRequired
  };
  state = {
    value: ''
  };
  onChange = (e, { value }) => {
    this.setState({ value });
  };
  handleSubmit = e => {
    e.preventDefault();
    new Promise((res, rej) => {
      this.props.onLoading();
      setTimeout(() => res(), 1000);
    }).then(() => this.props.onLogin(this.state.value));
  };
  generateDropdownData = () => {
    return Object.values(navUsers).map(user => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatar.src }
    }));
  };
  render() {
    const { value } = this.state;
    const disabled = value === '' ? true : false;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Header as="h2" color="green">
          Sign In
        </Header>
        <Form.Dropdown
          placeholder="Select a Friend"
          fluid
          selection
          scrolling
          options={this.generateDropdownData()}
          value={value}
          onChange={this.onChange}
          required
        />
        <Form.Button content="Login" positive disabled={disabled} fluid />
      </Form>
    );
  }
}

export default Login;
