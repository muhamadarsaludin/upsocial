import React from 'react'
import { Card, Row, Col, Image } from 'react-bootstrap'

export default function CardComment(props) {
  return (
    <>
      <Card className="mb-3 shadow">
        <Card.Body>
          <Row className="align-items-center">
            <Col sm={1} className="mr-4">
              <Image fluid src="https://placeimg.com/200/200/people" alt="Image dummy profile" className='rounded-circle' />
            </Col>
            <Col sm={10}>
              <p className='font-weight-bold text-grape'>{props.comment.name}</p>
              <p>{props.comment.body}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}
