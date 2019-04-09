import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Header, Button, Form, Radio } from 'semantic-ui-react';

export class PollQuestion extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    optionOne: PropTypes.object.isRequired,
    optionTwo: PropTypes.object.isRequired
  };
  state = {
    value: ''
  };

  handleChange = (e, { value }) => this.setState({ value });

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value !== '') {
      this.props.onSubmit(this.state.value);
    }
  };

  render() {
    const { optionOne, optionTwo } = this.props;
    const disabled = this.state.value === '' ? true : false;

    return (
      <Fragment>
        <Header as="h4">Would you rather</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Radio
              label={optionOne.text}
              name="radioGroup"
              value="optionOne"
              checked={this.state.value === 'optionOne'}
              onChange={this.handleChange}
            />
            <br />
            <Radio
              label={optionTwo.text}
              name="radioGroup"
              value="optionTwo"
              checked={this.state.value === 'optionTwo'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Button
              color="green"
              size="tiny"
              fluid
              positive
              disabled={disabled}
              content="Submit"
            />
          </Form.Field>
        </Form>
      </Fragment>
    );
  }
}

export default PollQuestion;
