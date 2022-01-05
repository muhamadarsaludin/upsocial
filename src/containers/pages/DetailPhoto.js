import React, { Component } from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import Axios from 'axios'
import { API_URL } from '../../utils/constanst'

export default class DetailPhoto extends Component {

  constructor(props) {
    super(props)

    this.state = {
      photo: {}
    }
  }


  componentDidMount() {
    let photoId = this.props.match.params.id;
    Axios.get(`${API_URL}photos/${photoId}`)
      .then(res => {
        this.setState({
          photo: res.data
        });
      }).catch(error => {
        console.log(error);
      })
  }



  render() {
    console.log(this.state.photo);
    return (
      <div>
        <Container fluid>
          {/* <Row className="justify-content-center align-item-center">
            <Col> */}
          <Card className="border-0 card-photo mx-auto">
            <Card.Img variant="top" src={this.state.photo.url} alt="Photo" />
            <Card.Body>
              <h4 className="font-weight-bold text-grape text-center">
                {this.state.photo.title}
              </h4>
            </Card.Body>
          </Card>
          {/* </Col>
          </Row> */}
        </Container>
      </div>
    )
  }
}
