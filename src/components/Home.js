import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react';
import UserCard from './UserCard';
import PollTeaser from './PollTeaser';

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

export class Home extends Component {
  static propTypes = {
    // unansweredQuestions: PropTypes.array.isRequired,
    // answeredQuestions: PropTypes.array.isRequired
    userQuestionData: PropTypes.object.isRequired
  };
  render() {
    const { userQuestionData } = this.props;
    // console.log(
    //   'this.props.unansweredQuestions',
    //   this.props.unansweredQuestions
    // );
    // console.log('this.props.answeredQuestions', this.props.answeredQuestions);
    return <Tab panes={panes({ userQuestionData })} className="tab" />;
  }
}

const panes = props => {
  const { userQuestionData } = props;
  return [
    {
      menuItem: 'Unanswered',
      render: () => (
        <Tab.Pane>
          {userQuestionData.answered.map(question => (
            <UserCard
              key={question.id}
              userId={question.author}
              color={color.green.hex}
            >
              <PollTeaser
                question={question}
                unanswered={true}
                color={color.green.name}
              />
            </UserCard>
          ))}
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Answered',
      render: () => (
        <Tab.Pane>
          {userQuestionData.unanswered.map(question => (
            <UserCard
              key={question.id}
              userId={question.author}
              color={color.blue.hex}
            >
              <PollTeaser
                question={question}
                unanswered={false}
                color={color.blue.name}
              />
            </UserCard>
          ))}
        </Tab.Pane>
      )
    }
  ];
};

function mapStateToProps({ authUser, users, questions }) {
  const answeredIds = Object.keys(users[authUser].answers);
  const answered = Object.values(questions)
    .filter(question => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(questions)
    .filter(question => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  // console.log('answeredIds', answeredIds);
  // console.log('answeredQuestions', answeredQuestions);
  // console.log('unansweredQuestions', unansweredQuestions);

  return {
    userQuestionData: {
      answered,
      unanswered
    }
  };
}

export default connect(mapStateToProps)(Home);
