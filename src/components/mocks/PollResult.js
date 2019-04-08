import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Header,
  Segment,
  Progress,
  Label,
  Button,
  Icon
} from 'semantic-ui-react';

export class PollResult extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    optionOne: PropTypes.object.isRequired,
    optionTwo: PropTypes.object.isRequired
  };
  handleClick = () => {
    this.props.history.push('/');
  };

  render() {
    const { optionOne, optionTwo } = this.props;

    return (
      <Fragment>
        <Header as="h3">Results:</Header>
        <Segment color="green" style={{ backgroundColor: 'honeydew' }}>
          <Label color="orange" ribbon="right" className="vote">
            <Icon name="check circle outline" size="big" className="compact" />
            <div style={{ float: 'right' }}>
              Your
              <br />
              Vote
            </div>
          </Label>
          <p style={{ fontWeight: 'bold' }}>{optionOne.text}</p>
          <Progress percent={((2 / 3) * 100).toFixed(2)} progress color="green">
            2 out of 3 votes
          </Progress>
        </Segment>
        <Segment color="grey" style={{ backgroundColor: '#f4f4f4' }}>
          <p style={{ fontWeight: 'bold' }}>{optionTwo.text}</p>
          <Progress percent={((1 / 3) * 100).toFixed(2)} progress>
            1 out of 3 votes
          </Progress>
        </Segment>
        {/* <Form.Field> */}
        <Button size="tiny" floated="right" onClick={this.handleClick}>
          Back
        </Button>
        {/* </Form.Field> */}
      </Fragment>
    );
  }
}

export default withRouter(PollResult);
