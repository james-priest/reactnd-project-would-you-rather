import React, { Component, Fragment } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import {
  Segment,
  Grid,
  Header,
  Image,
  Label,
  Divider
} from 'semantic-ui-react';

const trophyColor = ['yellow', 'grey', 'orange'];

export class Leaderboard extends Component {
  static propType = {
    leaderboardData: PropType.array.isRequired
  };
  render() {
    const { leaderboardData } = this.props;

    return (
      <Fragment>
        {leaderboardData.map((user, idx) => (
          <Segment.Group key={user.id}>
            <Label corner="left" icon="trophy" color={trophyColor[idx]} />
            <Grid divided padded>
              <Grid.Row>
                <Grid.Column width={4} verticalAlign="middle">
                  <Image src={user.avatarURL} />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header as="h3" textAlign="left">
                    {user.name}
                  </Header>
                  <Grid>
                    <Grid.Column width={12}>Answered questions</Grid.Column>
                    <Grid.Column width={4}>{user.answerCount}</Grid.Column>
                  </Grid>
                  <Divider />
                  <Grid>
                    <Grid.Column width={12}>Created questions</Grid.Column>
                    <Grid.Column width={4}>{user.questionCount}</Grid.Column>
                  </Grid>
                </Grid.Column>
                <Grid.Column width={4} textAlign="center">
                  <Segment.Group>
                    <Header as="h5" block attached="top" content="Score" />
                    <Segment>
                      <Label circular color="green" size="big">
                        {user.questionCount + user.answerCount}
                      </Label>
                    </Segment>
                  </Segment.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment.Group>
        ))}
      </Fragment>
    );
  }
}

function mapStateToProps({ users }) {
  const leaderboardData = Object.values(users)
    .map(user => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
      total: Object.values(user.answers).length + user.questions.length
    }))
    .sort((a, b) => a.total - b.total)
    .reverse()
    .slice(0, 3);
  return {
    leaderboardData
  };
}

export default connect(mapStateToProps)(Leaderboard);
