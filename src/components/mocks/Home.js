import React, { Component, Fragment } from 'react';
import Nav from './Nav';
import {
  Button,
  Container,
  Image,
  Grid,
  Header,
  Message,
  Segment,
  Placeholder
} from 'semantic-ui-react';

const ButtonConditionals = () => (
  <Button.Group attached="top">
    <Button positive>Unanswered</Button>
    <Button.Or />
    <Button>Answered</Button>
  </Button.Group>
);
const QuestionPlaceholder = () => (
  <Segment>
    <Placeholder>
      <Placeholder.Header image>
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Header>
      <Placeholder.Paragraph>
        <Placeholder.Line length="medium" />
        <Placeholder.Line length="short" />
      </Placeholder.Paragraph>
    </Placeholder>
  </Segment>
);

const Question1 = props => (
  <Fragment>
    <Header as="h5" textAlign="left" block attached="top">
      Meryem Jow asks:
    </Header>
    <Grid padded divided>
      <Grid.Row>
        <Grid.Column width={5}>
          <Image src={'/images/avatars/' + props.avatar} />
        </Grid.Column>
        <Grid.Column width={11}>
          <Header as="h5" textAlign="left">
            Would you rather
          </Header>
          <p>
            Get poked in the eye with a sharp stick
            <br />
            or...
          </p>
          <Button color="green" size="tiny" fluid positive>
            View Poll
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Fragment>
);

const Question2 = props => (
  <Segment.Group>
    <Header as="h5" textAlign="left" block attached="top">
      James Priest asks:
    </Header>
    <Grid divided padded>
      <Grid.Row>
        <Grid.Column width={5}>
          <Image src={'/images/avatars/' + props.avatar} />
        </Grid.Column>
        <Grid.Column width={11}>
          <Header as="h5" textAlign="left">
            Would you rather
          </Header>
          <p>
            Jump out of an airplane
            <br />
            or...
          </p>
          <Button color="green" size="tiny" fluid positive>
            View Poll
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment.Group>
);

const Question3 = props => (
  <Fragment>
    <Grid celled>
      <Grid.Row color="grey">
        <Grid.Column width={16} textAlign="left">
          Brittini Bryant asks:
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={5}>
          <Image src={'/images/avatars/' + props.avatar} />
        </Grid.Column>
        <Grid.Column width={11}>
          <Header as="h5" textAlign="left">
            Would you rather
          </Header>
          <p>
            Teach a dog to code
            <br />
            or...
          </p>
          <Button color="green" size="tiny" fluid positive>
            View Poll
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Fragment>
);

export class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
          padded
        >
          <Grid.Column style={{ maxWidth: 550 }}>
            <Grid.Row>
              <Segment.Group>
                <ButtonConditionals />
                {/* <Button.Group attached="top">
                  <Button primary>Unanswered</Button>
                  <Button toggle>Answered</Button>
                </Button.Group> */}
                <Segment>
                  <Question2 avatar={'dog.png'} />
                  <Question1 avatar={'rabbit.png'} />
                  <Question3 avatar={'lion.png'} />
                  <QuestionPlaceholder />
                  <QuestionPlaceholder />
                  <QuestionPlaceholder />
                </Segment>
              </Segment.Group>
            </Grid.Row>
            <Segment>
              <Header as="h2" color="teal" textAlign="center">
                Log-in to your account
              </Header>
            </Segment>
            <Message>
              New to us? <a href="#abc">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Home;
