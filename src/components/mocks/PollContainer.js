import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Grid, Image } from 'semantic-ui-react';
import PollQuestion from './PollQuestion';
import PollResult from './PollResult';

export class PollContainer extends Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    optionOne: PropTypes.object.isRequired,
    optionTwo: PropTypes.object.isRequired,
    showResult: PropTypes.bool.isRequired
  };
  state = {
    showResult: this.props.showResult
  };

  handleSubmit = val => {
    // console.log('val', val);
    this.setState({
      showResult: true
    });
  };

  render() {
    const { avatar, author } = this.props;

    return (
      <Segment.Group>
        <Header as="h5" textAlign="left" block attached="top">
          {author} asks:
        </Header>
        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image src={`/images/avatars/${avatar}`} />
            </Grid.Column>
            <Grid.Column width={11}>
              {this.state.showResult === false ? (
                <PollQuestion {...this.props} onSubmit={this.handleSubmit} />
              ) : (
                <PollResult {...this.props} />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment.Group>
    );
  }
}

export default PollContainer;
