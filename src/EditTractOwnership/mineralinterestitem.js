import React, { useRef, useState, Fragment } from 'react';
import uuidv4 from 'uuid/v4';
import Icon from '../Icon';

//this doesn't look as nice as importing a bunch of these in a single object
//it's better performance wise, becuase it doesn't import the ENTIRE OBJECT
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MineralInterestItem = ({ tract, status, onChange, onCancelClick }) => {
  const [ownerFieldVal, setOwnerFieldVal] = useState('');
  const [interestFieldVal, setInterestFieldVal] = useState('');
  const [leaseFieldVal, setLeaseFieldVal] = useState('');

  return (
    <div>
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
            <Form.Control
              placeholder={tract && tract.interest ? tract.interst : 'interest'}
              name="interest"
              value={interestFieldVal}
              onChange={e => setInterestFieldVal(e.target.value)}
              className="mineral-interest-interest"
            />
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
            <Row data-testid={`npri-${npri.id}`} key={npri.id}>
              <Col>
                <Icon icon="indent" /> {npri.owner}
              </Col>
              <Col>&nbsp;</Col>
              <Col>{npri.interest}</Col>
              <Col>{npri.lease}</Col>
              <Col>
                <Button data-testid={`npriRemove-${npri.id}`}>
                  <Icon icon="remove" />
                </Button>
              </Col>
            </Row>
          ))
        : null}

      {status === 'new' ? (
        <Row>
          <Col>
            <Button
              onClick={() => {
                //TODO: add actual NPRIs instead of the empty array
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
            <Button onClick={() => onCancelClick()}>Cancel</Button>
          </Col>
        </Row>
      ) : null}
    </div>
  );
};

export default MineralInterestItem;
