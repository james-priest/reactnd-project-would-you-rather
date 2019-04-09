import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Segment, Grid, Header, Button, Image } from 'semantic-ui-react';

const color = {
  green: {
    name: 'green',
    hex: '#21ba45'
  },
  blue: {
    name: 'blue',
    hex: '#2185d0'
  },
  teal: {
    name: 'teal',
    hex: '#009c95'
  },
  grey: {
    name: null,
    hex: '#767676'
  }
};
export class Question extends Component {
  static propTypes = {
    qid: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    unanswered: PropTypes.bool.isRequired,
    onSetResult: PropTypes.func.isRequired
  };
  state = {
    viewPoll: false
  };
  handleClick = e => {
    this.props.onSetResult(!this.props.unanswered);

    this.setState(prevState => ({
      viewPoll: !prevState.viewPoll
    }));
  };
  render() {
    const { avatar, author, question, qid, unanswered } = this.props;

    const tabColor = unanswered === true ? color.green : color.blue;

    if (this.state.viewPoll === true) {
      return <Redirect push to={`/questions/${qid}`} />;
    }
    return (
      <Segment.Group>
        <Header
          as="h5"
          textAlign="left"
          block
          attached="top"
          style={{
            borderTop: `2px solid ${tabColor.hex}`
          }}
          content={`${author} asks:`}
        />
        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image src={`/images/avatars/${avatar}`} />
            </Grid.Column>
            <Grid.Column width={11} textAlign="center">
              <Header as="h5" textAlign="left">
                Would you rather
              </Header>
              <p>
                {question}
                <br />
                or...
              </p>
              <Button
                color={tabColor.name}
                size="tiny"
                fluid
                onClick={this.handleClick}
                content={unanswered === true ? 'Answer Poll' : 'Results'}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment.Group>
    );
  }
}

export default Question;
