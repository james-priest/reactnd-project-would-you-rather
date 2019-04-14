import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'semantic-ui-react';
import { Question } from './Question';
import { userQuestionData } from './_data';
// import TabControl from './TabControl';

export class Home extends Component {
  static propTypes = {
    onSetResult: PropTypes.func.isRequired
  };
  // render() {
  //   return <TabControl onSetResult={this.props.onSetResult} />;
  // }
  render() {
    const { onSetResult } = this.props;
    return <Tab panes={panes({ onSetResult })} className="tab" />;
  }
}

const panes = props => [
  {
    menuItem: 'Unanswered',
    render: () => (
      <Tab.Pane>
        {userQuestionData.unanswered.map(question => (
          <Question
            key={question.qid}
            {...question}
            unanswered={true}
            // {...props}
            onSetResult={props.onSetResult}
          />
        ))}
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Answered',
    render: () => (
      <Tab.Pane>
        {userQuestionData.answered.map(question => (
          <Question
            key={question.qid}
            {...question}
            unanswered={false}
            // {...props}
            onSetResult={props.onSetResult}
          />
        ))}
      </Tab.Pane>
    )
  }
];

// class TabControl extends Component {
//   render() {
//     const { onSetResult } = this.props;
//     return <Tab panes={panes({ onSetResult })} className="tab" />;
//   }
// }

export default Home;
