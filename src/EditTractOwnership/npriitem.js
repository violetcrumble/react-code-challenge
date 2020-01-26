import React, { useState, Fragment } from 'react';
import uuidv4 from 'uuid/v4';
import Icon from '../Icon';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const NPRIItem = ({
  addNPRI,
  removeNPRI,
  npri,
  tract,
  status,
  onCancelClick,
}) => {
  const [npriInterestFieldVal, setNpriInterestFieldVal] = useState('');
  const [npriOwnerFieldVal, setNpriOwnerFieldVal] = useState('');

  return (
    <Fragment>
      <Row data-testid={npri ? `npri-${npri.id}` : 'npriRowAdd'}>
        <Col>
          <Row>
            <Col xs={1}>
              <Icon icon="indent" />
            </Col>
            <Col xs={11}>
              <Form.Control
                placeholder={npri && npri.owner ? npri.owner : 'npri owner'}
                name="npri-owner"
                value={npriOwnerFieldVal}
                onChange={e => setNpriOwnerFieldVal(e.target.value)}
                className="npri-owner"
              />
            </Col>
          </Row>
        </Col>
        <Col>&nbsp;</Col>
        <Col>
          <InputGroup>
            <Form.Control
              placeholder={
                npri && npri.interest ? npri.interest : 'npri interest'
              }
              name="npri-interest"
              value={npriInterestFieldVal}
              onChange={e => setNpriInterestFieldVal(e.target.value)}
              className="npri-interest"
            />
            <InputGroup.Append>
              <InputGroup.Text>%</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col>&nbsp;</Col>
        <Col>
          {status === 'new' ? (
            ' '
          ) : (
            <Button
              data-testid={`npriRemove-${npri.id}`}
              onClick={() => {
                removeNPRI(tract.id, npri.id);
              }}
            >
              <Icon icon="remove" />
            </Button>
          )}
        </Col>
      </Row>

      {status === 'new' ? (
        <Row key={`npri${tract.id}`}>
          <Col md={{ span: 1, offset: 9 }}>
            <Button
              variant="success"
              onClick={() => {
                addNPRI(tract.id, {
                  id: uuidv4(),
                  owner: npriOwnerFieldVal,
                  interest: npriInterestFieldVal,
                });
                setNpriOwnerFieldVal('');
                setNpriInterestFieldVal('');
              }}
            >
              Add
            </Button>
          </Col>
          <Col>
            <Button variant="danger" onClick={onCancelClick}>
              Cancel
            </Button>
          </Col>
        </Row>
      ) : null}
    </Fragment>
  );
};

export default NPRIItem;
