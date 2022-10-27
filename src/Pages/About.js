import React, { Component } from 'react';
import { Col, Container, Nav, Tab, TabContainer,Row } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <Container>
        <TabContainer id="lebt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Program</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frame</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libre</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className='mt-2'>
                <Tab.Pane eventKey="first" >
                  <img src="https://cdnimg.webstaurantstore.com/uploads/images/2018/7/profitable-menu-design-1.jpg" />
                  <p>fefgergewrjgherjhgewrjgewrkgeropgjperuoge</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-menu-design-template-b48b581ca761a0283243316310b9eaa4_screen.jpg?ts=1609331721"/>
                  <p>fefgergewrjgherjhgewrjgewrkgeropgjperuoge</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src="https://cdnimg.webstaurantstore.com/uploads/images/2018/7/profitable-menu-design-1.jpg" />
                  <p>fefgergewrjgherjhgewrjgewrkgeropgjperuoge</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src="https://cdnimg.webstaurantstore.com/uploads/images/2018/7/profitable-menu-design-1.jpg" />
                  <p>fefgergewrjgherjhgewrjgewrkgeropgjperuoge</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src="https://cdnimg.webstaurantstore.com/uploads/images/2018/7/profitable-menu-design-1.jpg" />
                  <p>fefgergewrjgherjhgewrjgewrkgeropgjperuoge</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </TabContainer>
      </Container>
    );
  }
}
