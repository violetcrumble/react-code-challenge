import React, { useState } from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import uuidv4 from 'uuid/v4';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import EditTractOwnership from './EditTractOwnership';
import Icon from './Icon';

function App() {
  const [tracts, setTracts] = useState([
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
  ]);

  const onChange = (action, id, owner, interest, lease, npris) => {
    if (action === 'addMI') {
      setTracts([...tracts, ...[{ id, owner, interest, lease, npris }]]);
    }
    if (action === 'addNPRI') {
      let tractsCopy = Object.assign({}, tracts);
      let newNPRIs = Object.assign({}, npris);
      Object.values(tractsCopy)
        .filter(item => item.id === id)[0]
        .npris.push(newNPRIs);
      setTracts([...tracts, tractsCopy]);
    }
    if (action === 'removeMI') {
      setTracts(tracts.filter(item => item.id !== id));
    }
    if (action === 'removeNPRI') {
      let tractsCopy = Object.assign({}, tracts);
      Object.values(tractsCopy)
        .filter(item => item.id === id)[0]
        .npris.pop();
      setTracts([...tracts, tractsCopy]);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron>
            <h1>
              Landdox Code Challenge <Icon icon="smile" />
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>
          <EditTractOwnership value={tracts} onChange={onChange} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
