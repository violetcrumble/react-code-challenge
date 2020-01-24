import React, { useState } from 'react';
import uuidv4 from 'uuid/v4';
import Icon from '../Icon';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const NPRIItem = ({ onChange, npri, tract, status, onCancelClick }) => {
  const [npriInterestFieldVal, setNpriInterestFieldVal] = useState('');
  const [npriLeaseFieldVal, setNpriLeaseFieldVal] = useState('');
  const [npriOwnerFieldVal, setNpriOwnerFieldVal] = useState('');

  return (
    <div>
      <Row data-testid={npri ? `npri-${npri.id}` : 'npriRowAdd'}>
        <Col>
          <Icon icon="indent" />
          <Form.Control
            placeholder={npri && npri.owner ? npri.owner : 'npri owner'}
            name="npri-owner"
            value={npriOwnerFieldVal}
            onChange={e => setNpriOwnerFieldVal(e.target.value)}
            className="npri-owner"
          />
        </Col>
        <Col>&nbsp;</Col>
        <Col>
          <InputGroup>
            <Form.Control
              placeholder={
                npri && npri.interest ? npri.interst : 'npri interest'
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
        <Col>
          <Form.Control
            placeholder={npri && npri.lease ? npri.lease : 'npri lease'}
            name="npri-lease"
            value={npriLeaseFieldVal}
            onChange={e => setNpriLeaseFieldVal(e.target.value)}
            className="npri-lease"
          />
        </Col>
        <Col>
          {status === 'new' ? (
            ' '
          ) : (
            <Button
              data-testid={`npriRemove-${npri.id}`}
              onClick={() => {
                onChange('removeNPRI', tract.id);
              }}
            >
              <Icon icon="remove" />
            </Button>
          )}
        </Col>

        {status === 'new' ? (
          <Row>
            <Col md={{ span: 1, offset: 9 }}>
              <Button
                variant="success"
                onClick={() => {
                  onChange(
                    'addNPRI',
                    tract.id,
                    tract.owner,
                    tract.interest,
                    tract.lease,
                    [
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
                    ]
                  );
                  setNpriOwnerFieldVal('');
                  setNpriInterestFieldVal('');
                  setNpriLeaseFieldVal('');
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
      </Row>
    </div>
  );
};

export default NPRIItem;
