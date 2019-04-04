import React, { Component } from 'react';
import { Tab, Grid } from 'semantic-ui-react';
import { Question } from './Question';

const questionData = {
  unanswered: [
    {
      user: 'James Priest',
      avatar: 'koala.png',
      question: 'Jump out of an airplane'
    },
    {
      user: 'Evi Monday',
      avatar: 'rabbit.png',
      question: 'Surprise a friend'
    },
    {
      user: 'Brittini Bryant',
      avatar: 'dog.png',
      question: 'Teach a dog to code'
    }
  ],
  answered: [
    {
      user: 'Meryem Jow',
      avatar: 'tiger.png',
      question: 'Know how to speak fluent German'
    },
    {
      user: 'Peter Cruckshank',
      avatar: 'gorilla.png',
      question: 'Have a seamless MERN app deployment'
    },
    {
      user: 'Joey Rivera',
      avatar: 'lion.png',
      question: 'Run your own dev company'
    }
  ]
};

const panes = [
  {
    menuItem: 'Unanswered',
    render: () => (
      <Tab.Pane>
        {questionData.unanswered.map(question => (
          <Question key={question.user} {...question} />
        ))}
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Answered',
    render: () => (
      <Tab.Pane>
        {questionData.answered.map(question => (
          <Question key={question.user} {...question} />
        ))}
      </Tab.Pane>
    )
  }
];

export class TabControl extends Component {
  render() {
    return (
      <Grid padded="vertically" columns={1} centered>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 550 }}>
            <Tab panes={panes} className="tab" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default TabControl;
