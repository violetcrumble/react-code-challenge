import React, { useState, Fragment } from 'react';
import uuidv4 from 'uuid/v4';
import Icon from '../Icon';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';

import NPRIItem from './npriitem';

const MineralInterestItem = ({ tract, status, onChange, onCancelClick }) => {
  const [ownerFieldVal, setOwnerFieldVal] = useState('');
  const [interestFieldVal, setInterestFieldVal] = useState('');
  const [leaseFieldVal, setLeaseFieldVal] = useState('');

  const [isAddNewNPRIShowing, setIsAddNewNPRIShowing] = useState(false);

  return (
    <div style={{ borderBottom: 'dotted 1px gray', marginBottom: '20px' }}>
      <Row
        className="mineral-interest-item"
        data-testid={
          tract ? `mineralInterest-${tract.id}` : 'mineralInterestRowAdd'
        }
      >
        <Col>
          <Form.Group>
            <Form.Control
              placeholder={tract && tract.owner ? tract.owner : 'owner'}
              name="owner"
              value={ownerFieldVal}
              onChange={e => setOwnerFieldVal(e.target.value)}
              className="mineral-interest-owner"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <InputGroup>
              <Form.Control
                placeholder={
                  tract && tract.interest ? tract.interest : 'interest'
                }
                name="interest"
                value={interestFieldVal}
                onChange={e => setInterestFieldVal(e.target.value)}
                className="mineral-interest-interest"
              />
              <InputGroup.Append>
                <InputGroup.Text>%</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col>&nbsp;</Col>
        <Col>
          <Form.Group>
            <Form.Control
              placeholder={tract && tract.lease ? tract.lease : 'lease'}
              name="lease"
              value={leaseFieldVal}
              onChange={e => setLeaseFieldVal(e.target.value)}
              className="mineral-interest-lease"
            />
          </Form.Group>
        </Col>
        <Col>
          <Col>
            {status === 'new' ? (
              ' '
            ) : (
              <Button
                data-testid={`mineralInterest-${tract.id}.remove`}
                onClick={() => {
                  onChange('removeMI', tract.id);
                }}
              >
                <Icon icon="remove" />
              </Button>
            )}
          </Col>
        </Col>
      </Row>

      {tract && tract.npris && tract.npris.length > 0
        ? tract.npris.map(npri => (
            <NPRIItem
              onChange={onChange}
              npri={npri}
              tract={tract}
              key={npri.id}
            />
          ))
        : null}

      {status === 'new' ? (
        <Row>
          <Col md={{ span: 1, offset: 9 }}>
            <Button
              variant="success"
              onClick={() => {
                onChange(
                  'addMI',
                  uuidv4(),
                  ownerFieldVal,
                  interestFieldVal,
                  leaseFieldVal,
                  []
                );
                setOwnerFieldVal('');
                setInterestFieldVal('');
                setLeaseFieldVal('');
              }}
            >
              Add
            </Button>
          </Col>
          <Col>
            <Button variant="danger" onClick={() => onCancelClick()}>
              Cancel
            </Button>
          </Col>
        </Row>
      ) : (
        <Fragment>
          {isAddNewNPRIShowing ? (
            <Card style={{ padding: '10px' }}>
              <h3>Add New NPRI</h3>
              <NPRIItem
                status="new"
                onChange={onChange}
                onCancelClick={() => setIsAddNewNPRIShowing(false)}
                tract={tract}
              />
            </Card>
          ) : (
            <Button onClick={() => setIsAddNewNPRIShowing(true)}>
              Add NPRI
            </Button>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default MineralInterestItem;
