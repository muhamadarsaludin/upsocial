import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CardPost.css'

export default function CardPost(props) {
  let body = props.data.body;
  if (body.length > 60) {
    body = body.substring(0, 60) + "...";
  }
  // console.log(body);
  return (
    <>
      <Card className={`card-post border-0 ${props.className}`} onClick={() => props.goDetail(props.data.id)} >
        <Card.Img variant="top" src="https://placeimg.com/480/250/tech" alt="dummy image" />
        <Card.Body>
          <div className="d-flex justify-content-between mb-1">
            <div>
              <p className="small">
                <i className="fas fa-user-edit"></i> {props.user.name}
              </p>
            </div>
            <div>
              <p className="small">
                <i className="fas fa-building"></i> {props.user.company.name}
              </p>
            </div>
          </div>

          <Card.Title className="title">{props.data.title}</Card.Title>
          <Card.Text>
            {body}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
