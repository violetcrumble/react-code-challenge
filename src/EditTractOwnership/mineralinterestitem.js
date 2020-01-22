import React, { useState, Fragment } from 'react';
import uuidv4 from 'uuid/v4';
import Icon from '../Icon';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MineralInterestItem = ({ tract, status, onChange, onCancelClick }) => {
  return (
    <Fragment>
      <Row
        data-testid={
          tract ? `mineralInterest-${tract.id}` : 'mineralInterestRowAdd'
        }
      >
        <Col>
          <Form.Group>
            <Form.Control
              placeholder={tract && tract.owner ? tract.owner : 'owner'}
              name="owner"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Control
              placeholder={tract && tract.interest ? tract.interst : 'interest'}
              name="interest"
            />
          </Form.Group>
        </Col>
        <Col>&nbsp;</Col>
        <Col>
          <Form.Group>
            <Form.Control
              placeholder={tract && tract.lease ? tract.lease : 'lease'}
              name="lease"
            />
          </Form.Group>
        </Col>
        <Col>
          <Col>{status === 'new' ? ' ' : <Icon icon="remove" />}</Col>
        </Col>
      </Row>
      {tract && tract.npris && tract.npris.length > 0
        ? tract.npris.map(npri => (
            <Row data-testid={`npri-${npri.id}`} key={npri.id}>
              <Col>
                <Icon icon="indent" /> {npri.owner}
              </Col>
              <Col>&nbsp;</Col>
              <Col>{npri.interest}</Col>
              <Col>{npri.lease}</Col>
              <Col>
                <Icon icon="remove" />
              </Col>
            </Row>
          ))
        : null}

      {status === 'new' ? (
        <Row>
          <Col>
            <Button
              onClick={() =>
                onChange(uuidv4(), 'Bonnie Mellott', 0.5, 'Lease', [])
              }
            >
              Add
            </Button>
          </Col>
          <Col>
            <Button onClick={() => onCancelClick()}>Cancel</Button>
          </Col>
        </Row>
      ) : null}
    </Fragment>
  );
};

export default MineralInterestItem;
