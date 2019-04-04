import React from 'react';
import { Segment, Grid, Header, Button, Image } from 'semantic-ui-react';

export const Question = ({ avatar, user, question }) => (
  <Segment.Group>
    <Header as="h5" textAlign="left" block attached="top">
      {user} asks:
    </Header>
    <Grid divided padded>
      <Grid.Row>
        <Grid.Column width={5}>
          <Image src={'/images/avatars/' + avatar} />
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
          <Button color="green" size="tiny" fluid positive>
            View Poll
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment.Group>
);
