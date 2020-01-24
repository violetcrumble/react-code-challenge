import React, { useState, Fragment } from 'react';

import Container from 'react-bootstrap/Container';
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

  return (
    <Container className="mineral-interests-listing">
      <Row>
        <Col>Owner</Col>
        <Col>Mineral Interest</Col>
        <Col>NPRI</Col>
        <Col>Lease</Col>
        <Col>&nbsp;</Col>
      </Row>

      {value.length > 0 ? (
        value.map(tract => (
          <Fragment key={tract.id}>
            <MineralInterestItem tract={tract} onChange={onChange} />
          </Fragment>
        ))
      ) : (
        <Row>
          <p>No listings.</p>
        </Row>
      )}

      {isAddNewMineralInterestShowing ? (
        <Card style={{ padding: '10px' }}>
          <h3>Add New Mineral Interest</h3>
          <MineralInterestItem
            status="new"
            onChange={onChange}
            onCancelClick={() => setIsAddNewMineralInterestShowing(false)}
          />
        </Card>
      ) : (
        <Button onClick={() => setIsAddNewMineralInterestShowing(true)}>
          Add Mineral Interest
        </Button>
      )}
    </Container>
  );
};

export default EditTractOwnership;
