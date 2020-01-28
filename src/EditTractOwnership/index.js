import React, { useState, useEffect, Fragment } from 'react';
import uuidv4 from 'uuid/v4';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import MineralInterestItem from './mineralinterestitem.js';

const EditTractOwnership = ({ value = [], onChange = () => {} }) => {
  const [
    isAddNewMineralInterestShowing,
    setIsAddNewMineralInterestShowing,
  ] = useState(false);

  const [pageKey, setPageKey] = useState(uuidv4());

  const [tracts, setTracts] = useState(value);

  useEffect(() => {
    onChange(tracts);
  }, [tracts]);

  const addMI = (id, owner, interest, lease, npris) => {
    setTracts([...tracts, ...[{ id, owner, interest, lease, npris }]]);
  };

  const removeMI = id => {
    setTracts(tracts.filter(item => item.id !== id));
  };

  const addNPRI = (id, npris) => {
    setPageKey(uuidv4());
    let tractsCopy = tracts;

    tractsCopy.filter(item => item.id === id)[0].npris.push(npris);

    setTracts(tractsCopy);
  };

  const removeNPRI = tractId => {
    setPageKey(uuidv4());
    let newNpris = Object.assign({}, tracts);
    newNpris = Object.values(newNpris)
      .filter(item => item.id === tractId)[0]
      .npris.pop();
    let tractsCopy = tracts;
    setTracts(tractsCopy);
  };

  return (
    <Fragment>
      <Row>
        <Col>Owner</Col>
        <Col>Mineral Interest</Col>
        <Col>NPRI</Col>
        <Col>Lease</Col>
        <Col>&nbsp;</Col>
      </Row>

      {tracts.length > 0 ? (
        tracts.map(tract => (
          <Fragment key={tract.id}>
            <MineralInterestItem
              tract={tract}
              onChange={onChange}
              addMI={addMI}
              removeMI={removeMI}
              addNPRI={addNPRI}
              removeNPRI={removeNPRI}
            />
          </Fragment>
        ))
      ) : (
        <Row>
          <p>No listings.</p>
        </Row>
      )}

      {isAddNewMineralInterestShowing ? (
        <Card>
          <Card.Header>Add New Mineral Interest</Card.Header>
          <Card.Body>
            <MineralInterestItem
              status="new"
              onChange={onChange}
              addMI={addMI}
              removeMI={removeMI}
              addNPRI={addNPRI}
              removeNPRI={removeNPRI}
              onCancelClick={() => setIsAddNewMineralInterestShowing(false)}
            />
          </Card.Body>
        </Card>
      ) : (
        <Button
          size="lg"
          block
          className="add-mi-button"
          onClick={() => setIsAddNewMineralInterestShowing(true)}
        >
          Add Mineral Interest
        </Button>
      )}
    </Fragment>
  );
};

export default EditTractOwnership;
