import { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardPost from '../../components/CardPost'
import Axios from 'axios'
import { API_URL } from '../../utils/constanst'


export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      users: []
    }
  }

  getPostsApi = () => {
    Axios
      .get(`${API_URL}posts`)
      .then(resp => resp.data)
      .then(data => {
        this.setState({ posts: data });
        console.log(this.state.posts);
      })
      .then(
        Axios
          .get(`${API_URL}users`)
          .then(resp => resp.data)
          .then(data => {
            this.setState({ users: data });
            console.log(this.state.users);
          })
      )
      .catch(error => {
        console.log(error);
      })
  }



  handleDetailPost = (id) => {
    this.props.history.push(`/detail/${id}`)
  }


  componentDidMount() {
    this.getPostsApi();
  }



  render() {

    return (
      <div>
        <Container fluid >
          <Row className="d-flex">
            {
              this.state.posts.map(post => {
                const { userId } = post;
                return (
                  <Fragment key={post.id}>
                    {
                      this.state.users.map(user => {
                        if (user.id === userId) {
                          return (
                            <Col sm={4} className='mb-4' key={post.id}>
                              <CardPost data={post} goDetail={this.handleDetailPost} user={user} />
                            </Col>
                          )
                        } else {
                          return null;
                        }
                      })
                    }
                  </Fragment>
                )
              })
            }
          </Row>
        </Container>
      </div >
    )
  }
}
