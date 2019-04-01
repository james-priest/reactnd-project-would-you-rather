import React, { Component, Fragment } from 'react';
import faker from 'faker';
import {
  Menu,
  Segment,
  Responsive,
  Image,
  Container,
  Grid,
  Icon,
  Button
} from 'semantic-ui-react';

export class UITest2 extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Responsive as={Menu} minWidth={501} pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="leader board"
            active={activeItem === 'leader board'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="add question"
            active={activeItem === 'add question'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <span>
                <Image
                  src="images/avatars/fox.png"
                  avatar
                  spaced="right"
                  verticalAlign="bottom"
                />
                James Priest
              </span>
            </Menu.Item>
            {/* <Menu.Item
              name="logout"
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            /> */}
            <Menu.Item>
              <Button
                content="Logout"
                icon="arrow alternate circle right"
                labelPosition="right"
                basic
                compact
              />
            </Menu.Item>
          </Menu.Menu>
        </Responsive>
        <Responsive as={Fragment} maxWidth={500}>
          {/* <Menu secondary>
            <Menu.Item>
              <span>
                Hello, James Priest
                <Image
                  src="images/avatars/fox.png"
                  avatar
                  spaced="left"
                  verticalAlign="bottom"
                />
              </span>
            </Menu.Item>
            <Menu.Item
              name="logout"
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu> */}
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Image
                  src="images/avatars/fox.png"
                  avatar
                  spaced="right"
                  verticalAlign="bottom"
                />
                James Priest
              </Grid.Column>
              <Grid.Column width={8} verticalAlign="bottom" textAlign="right">
                {/* <Button icon basic compact>
                  <Icon link name="close" />
                  Logout
                </Button> */}
                <Button
                  content="Logout"
                  icon="arrow alternate circle right"
                  labelPosition="right"
                  basic
                  compact
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Menu pointing secondary widths={3}>
            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="leader board"
              active={activeItem === 'leader board'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="add question"
              active={activeItem === 'add question'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Responsive>

        <Segment>
          <img
            src="/images/wireframe/media-paragraph.png"
            style={{ width: '100%' }}
            alt="media"
          />
        </Segment>
        <p>{faker.lorem.paragraphs(1)}</p>
        <Image src="images/avatars/lion.png" size="mini" />
        <Image src="images/avatars/dog.png" size="tiny" />
        <Image src="images/avatars/rabbit.png" size="small" />
        <Image src="images/avatars/quala.png" size="medium" />
      </div>
    );
  }
}

export default UITest2;
