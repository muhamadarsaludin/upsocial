import React from 'react'
import { Card, Row, Col, Image } from 'react-bootstrap'
import './CardComment.css'

export default function CardComment(props) {
  return (
    <>
      <Card className="mb-3 shadow">
        <Card.Body>
          <Row className="align-items-center">
            <Col xs={5} md={1} className="mr-lg-4">
              <Image fluid src="https://placeimg.com/200/200/people" alt="Image dummy profile" className='rounded-circle' />
            </Col>
            <Col xs={7} md={10}>
              <p className='font-weight-bold text-grape'>{props.comment.name}</p>
              <p>{props.comment.body}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}
