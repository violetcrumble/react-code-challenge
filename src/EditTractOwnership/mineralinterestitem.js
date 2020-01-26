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

const MineralInterestItem = ({
  tract,
  status,
  addMI,
  removeMI,
  addNPRI,
  removeNPRI,
  onCancelClick,
}) => {
  const [ownerFieldVal, setOwnerFieldVal] = useState('');
  const [interestFieldVal, setInterestFieldVal] = useState('');
  const [leaseFieldVal, setLeaseFieldVal] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [isAddNewNPRIShowing, setIsAddNewNPRIShowing] = useState(false);

  return (
    <div className="mineral-interests-wrapper">
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
              value={tract && tract.owner ? tract.owner : ownerFieldVal}
              onChange={e => setOwnerFieldVal(e.target.value)}
              className="mineral-interest-owner"
              data-testid={
                tract && tract.id ? `mineralInterest-${tract.id}.owner` : null
              }
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
                data-testid={
                  tract && tract.id
                    ? `mineralInterest-${tract.id}.interest`
                    : null
                }
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
              data-testid={
                tract && tract.id ? `mineralInterest-${tract.id}.lease` : null
              }
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
                  removeMI(tract.id);
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
              addNPRI={addNPRI}
              removeNPRI={removeNPRI}
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
                addMI(
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
            <Card>
              <Card.Header>Add New NPRI</Card.Header>
              <Card.Body>
                <Card.Text>
                  <NPRIItem
                    status="new"
                    onCancelClick={() => setIsAddNewNPRIShowing(false)}
                    tract={tract}
                    addNPRI={addNPRI}
                    removeNPRI={removeNPRI}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <Button
              className="add-npri-button"
              onClick={() => setIsAddNewNPRIShowing(true)}
            >
              Add NPRI to {tract.owner}
            </Button>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default MineralInterestItem;
