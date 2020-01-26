import React, { Fragment } from 'react';
import uuidv4 from 'uuid/v4';

import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.css';
import Logo from './primary_logo.svg';

import EditTractOwnership from './EditTractOwnership';

const tractOwnerships = [
  {
    id: uuidv4(),
    owner: 'Luke Skywalker',
    interest: 0.5,
    lease: 'Tatooine Lease',
    npris: [
      {
        id: uuidv4(),
        owner: 'Leia Organa',
        interest: 0.45,
      },
      {
        id: uuidv4(),
        owner: 'Han Solo',
        interest: 0.15,
      },
    ],
  },
];

function App() {
  return (
    <Fragment>
      <Navbar bg="light" variant="light">
        <Navbar.Brand>
          <img width="150" src={Logo} alt="Landdox" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link
                href="https://stackoverflow.com/users/story/4483968"
                target="_blank"
              >
                StackOverflow
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://github.com/violetcrumble" target="_blank">
                GitHub
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://www.linkedin.com/in/bonniemellott/"
                target="_blank"
              >
                LinkedIn
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Row>
          <Col>
            <EditTractOwnership value={tractOwnerships} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
