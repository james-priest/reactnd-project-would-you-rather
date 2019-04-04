import React, { Component } from 'react';
import { Tab, Grid } from 'semantic-ui-react';

export class TabExample extends Component {
  render() {
    return (
      <Grid padded="vertically" columns={1} centered>
        <Grid.Row>
          <Grid.Column>
            <Tab panes={panes2} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const panes2 = [
  {
    menuItem: 'Unanswered',
    render: () => <Tab.Pane>Unanswered Questions</Tab.Pane>
  },
  {
    menuItem: { key: 'Answered', content: 'Answered', className: 'center' },
    render: () => (
      <Tab.Pane style={{ textAlign: 'center' }}>Answered Questions</Tab.Pane>
    )
  },
  {
    menuItem: 'Third',
    render: () => <Tab.Pane>Third Question</Tab.Pane>
  }
];

export default TabExample;
