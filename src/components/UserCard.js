import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment, Header, Grid, Image } from 'semantic-ui-react';

export class UserCard extends Component {
  static propTypes = {
    userId: PropTypes.string.isRequired,
    color: PropTypes.string
  };
  render() {
    const { user, children, color } = this.props;
    // console.log('this.props', this.props);

    return (
      <Segment.Group>
        <Header
          as="h5"
          textAlign="left"
          block
          attached="top"
          style={{
            borderTop: `2px solid ${color}`
          }}
          content={`${user.name} asks:`}
        />

        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image src={user.avatarURL} />
            </Grid.Column>
            <Grid.Column width={11}>{children}</Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment.Group>
    );
  }
}

function mapStateToProps({ users }, props) {
  const user = users[props.userId];

  return {
    user
  };
}

export default connect(mapStateToProps)(UserCard);
