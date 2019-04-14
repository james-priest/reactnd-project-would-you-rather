import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Segment,
  Header,
  Grid,
  Divider,
  Form,
  Dimmer,
  Loader,
  Card,
  Feed
} from 'semantic-ui-react';

export class NewPoll extends Component {
  state = {
    validSubmit: false,
    isLoading: false,
    option1: '',
    option2: ''
  };
  handleChange = e => {
    console.log(e.target.id);
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log('this.state.option1', this.state.option1);
    console.log('this.state.option2', this.state.option2);

    new Promise((res, rej) => {
      this.setState({ isLoading: true });
      setTimeout(() => res('success'), 1000);
    }).then(() => {
      this.setState({
        option1: '',
        option2: ''
      });
      this.setState({ validSubmit: true });
    });
  };
  render() {
    const disabled = this.state.option1 === '' || this.state.option2 === '';
    if (this.state.validSubmit === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Segment.Group>
          <Header as="h3" textAlign="left" block attached="top">
            Create a New Poll
          </Header>
          <Grid padded>
            <Grid.Column>
              {this.state.isLoading && (
                <Dimmer active inverted>
                  <Loader content="Updating" />
                </Dimmer>
              )}
              <p>Complete the question:</p>
              <p>
                <strong>Would you rather...</strong>
              </p>
              <Form onSubmit={this.handleSubmit}>
                <Form.Input
                  id="option1"
                  placeholder="Enter option one..."
                  value={this.state.option1}
                  onChange={this.handleChange}
                  required
                />
                <Divider horizontal>Or</Divider>
                <Form.Input
                  id="option2"
                  placeholder="Enter option two..."
                  value={this.state.option2}
                  onChange={this.handleChange}
                  required
                />
                <Form.Button positive size="tiny" fluid disabled={disabled}>
                  Submit
                </Form.Button>
              </Form>
            </Grid.Column>
          </Grid>
        </Segment.Group>
        <CardExampleContentBlock />
      </div>
    );
  }
}

const CardExampleContentBlock = () => (
  <Card fluid color="red">
    <Card.Content
      style={{ backgroundColor: '#f3f4f5', borderBottom: '1px solid #d4d4d5' }}
    >
      <Card.Header>Recent Activity</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image="/images/avatars/small/jenny.jpg" />
          <Feed.Content>
            <Feed.Date content="1 day ago" />
            <Feed.Summary>
              You added <a href="#a">Jenny Hess</a> to your{' '}
              <a href="#a">coworker</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="/images/avatars/small/molly.png" />
          <Feed.Content>
            <Feed.Date content="3 days ago" />
            <Feed.Summary>
              You added <a href="#a">Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="/images/avatars/small/elliot.jpg" />
          <Feed.Content>
            <Feed.Date content="4 days ago" />
            <Feed.Summary>
              You added <a href="#a">Elliot Baker</a> to your{' '}
              <a href="#a">musicians</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
);

export default NewPoll;
