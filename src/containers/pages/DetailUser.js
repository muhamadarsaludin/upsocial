import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { API_URL } from '../../utils/constanst'



export default class DetailUser extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: {},
      address: {},
      company: {},
      albums: [],
      photos: [],
    }
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    let userId = this.props.match.params.id;
    Axios.get(`${API_URL}users/${userId}`)
      .then(res => {
        // console.log(res.data);
        this.setState({
          user: res.data
        });
        return res.data
      }).then(res => {
        this.setState({
          address: { ...res.address }
        })
        this.setState({
          company: { ...res.company }
        })
      })
      .catch(error => {
        console.log(error);
      })

    Axios.get(`${API_URL}users/${userId}/albums`)
      .then(res => {
        this.setState({
          albums: res.data
        });
        return Axios.get(`${API_URL}photos`)
      }).then(res => {
        this.setState({
          photos: res.data
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Container fluid>
          <Card className="shadow mb-4" >
            <Card.Body>
              <Row className="align-items-center">
                <Col sm={2} className="mr-lg-2">
                  <Image fluid src="https://placeimg.com/200/200/people" alt="Image Profile" className='rounded' />
                </Col>
                <Col sm={9} className="mt-4 mt-md-0">
                  <h4 className="font-weight-bold text-grape">{this.state.user.name}</h4>
                  <p><i className="fas fa-envelope"></i> {this.state.user.email}</p>
                  <p><i className="fas fa-map-marked-alt"></i> {`${this.state.address.street}, ${this.state.address.suite}, ${this.state.address.city} (${this.state.address.zipcom})`}</p>
                  <p><i className="fas fa-building"></i> {this.state.company.name}</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="shadow">
            <Card.Body>
              <h4 className='text-grape font-weight-bold mb-4'>Daftar Album</h4>

              {this.state.albums.map(album => {
                const { id } = album;
                return (
                  <Fragment key={album.id}>
                    <Card className="mb-4">
                      <Card.Header>
                        <p className="mb-0">{album.title}</p>
                      </Card.Header>
                      <Card.Body>
                        <Row>
                          {
                            this.state.photos.map(photo => {
                              if (id === photo.albumId) {
                                return (
                                  <Fragment key={photo.id}>
                                    <Col xs={3} md={1} className="mb-4">
                                      <Link to={`/photo/${photo.id}`}>
                                        <Image fluid src={photo.thumbnailUrl} alt="thumbnail photo" className="rounded" />
                                      </Link>
                                    </Col>
                                  </Fragment>
                                );
                              }
                              return null;
                            })
                          }
                        </Row>
                      </Card.Body>
                    </Card>
                  </Fragment>
                )
              })
              }
            </Card.Body>
          </Card>
        </Container>
      </div>
    )
  }
}