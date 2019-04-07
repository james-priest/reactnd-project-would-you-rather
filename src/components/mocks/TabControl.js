import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Tab, Menu } from 'semantic-ui-react';
import { Question } from './Question';
import { userQuestionData } from './_data';

/*
 * This is a test of Tab with React Router integration.
 * We eventually want the Back & Forward browser buttons
 *  to navigate tab history
 */

const panes = props => [
  {
    // menuItem: 'Unanswered',
    menuItem: () => (
      <Menu.Item
        key="Unanswered"
        name="Unanswered"
        as={Link}
        to="/unanswered"
      />
    ),
    render: () => (
      <Tab.Pane>
        {userQuestionData.unanswered.map(question => (
          <Question
            key={question.author}
            {...question}
            unanswered={true}
            {...props}
            // onSetResult={props.onSetResult}
          />
        ))}
      </Tab.Pane>
    )
  },
  {
    // menuItem: 'Answered',
    menuItem: () => (
      <Menu.Item key="Answered" name="Answered" as={Link} to="/answered" />
    ),
    render: () => (
      <Tab.Pane>
        {userQuestionData.answered.map(question => (
          <Question
            key={question.author}
            {...question}
            unanswered={false}
            {...props}
            // onSetResult={props.onSetResult}
          />
        ))}
      </Tab.Pane>
    )
  }
];

class TabControl extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  handleCallToRouter = value => {
    // this.props.history.push()
    console.log(
      'this.props.history.location.pathname',
      this.props.history.location.pathname
    );
  };
  render() {
    return (
      <Tab
        panes={panes(this.props)}
        className="tab"
        onTabChange={this.handleCallToRouter}
      />
    );
  }
}

// export default TabControl;
export default withRouter(TabControl);
