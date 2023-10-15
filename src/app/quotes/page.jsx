'use client'
import React from 'react'
import { Accordion, Button, Col, Container, Form, Row, Stack } from 'react-bootstrap'

export default function page() {
  return (
    <Container>
      <Form>
        <Stack className='col-12 col-md-6' gap={3}>
          <Row>
            <Col>
              <Form.Select aria-label='test'>
                <option>Select Customer</option>
                <option>+ Add Customer</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Select aria-label='test'>
                <option>Select Shipping Address</option>
                <option>+ Add Address</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Select aria-label='test'>
                <option>Select Contact</option>
                <option>+ Add Site Contact</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId='formgroup-start-date'>
                <Form.Label>Start Date</Form.Label>
                <Form.Control type='date' id='start-date'/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='formgroup-end-date'>
                <Form.Label>End Date</Form.Label>
                <Form.Control type='date' id="end-date"/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Select aria-label='Equipment Type'>
                <option>Select Equipment Type</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control type='text' id='day-rate' placeholder='Day' required/>
            </Col>
            <Col>
              <Form.Control type='text' id='week-rate' placeholder='Week' required/>
            </Col>
            <Col>
              <Form.Control type='text' id='4week-rate' placeholder='4 Week' required/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="outline-primary" type='button' size='sm'>Add another unit</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control type='text' id='trucking-delivery' placeholder='Delivery'/>
            </Col>
            <Col>
              <Form.Control type='text' id='trucking-return' placeholder='Return'/>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Control type='text' id='environmental' placeholder='Env Fee'/>
            </Col>
            <Col>
              <Form.Control type='text' id='fuel' placeholder='Fuel'/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Check label='Damage Waiver 15%' name='waiver' id='waiver'/>
              <Form.Check label='Tax Exempt' name='tax-exempt' id='tax-exempt'/>
            </Col>
            <Col>
              <Form.Control type='text' id='other' placeholder='Other'/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control type='textarea' id='delivery-instructions' placeholder='delivery instructions'/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button type='submit'>Submit</Button>
            </Col>
          </Row>
        </Stack>
      </Form>
    </Container>
  )
}
