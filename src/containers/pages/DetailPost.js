import { Component, Fragment } from 'react'
import { Container, Card } from 'react-bootstrap'
import Axios from 'axios'
import { API_URL } from '../../utils/constanst'
import Banner from '../../components/Banner'
import { Link } from 'react-router-dom'
import CardComment from '../../components/CardComment'

export default class DetailPost extends Component {

  constructor(props) {
    super(props)

    this.state = {
      post: [],
      user: [],
      comments: [],
    }
  }


  componentDidMount() {
    // console.log(this.props.match.params.id);
    let id = this.props.match.params.id;
    Axios.get(`${API_URL}posts/${id}`)
      .then(res => {
        // console.log(res.data);
        this.setState({
          post: res.data
        });
        return Axios.get(`${API_URL}users/${this.state.post.userId}`);
      }).then(res => {
        console.log(res);
        this.setState({
          user: res.data
        })
        return Axios.get(`${API_URL}posts/${id}/comments`)
      }).then(res => {
        console.log(res);
        this.setState({
          comments: res.data
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    console.log(this.state.post);
    return (
      <div>
        <Container fluid >
          <Banner src="https://placeimg.com/480/250/tech" alt="Image Banner" className="rounded" />
          <p className='mt-4'> <i className="fas fa-user-edit"></i> Author<span> : </span>
            <Link to={`/user/${this.state.user.id}`}>
              {this.state.user.name}
            </Link>
          </p>

          <h2 className="text-grape">{this.state.post.title}</h2>
          <p>{this.state.post.body}</p>

          <div className="comment mt-4">
            <Card className="shadow">
              <Card.Body>
                <h4 className='text-grape font-weight-bold mb-4'>Komentar</h4>
                {this.state.comments.map(comment => {
                  return (
                    <Fragment key={comment.id}>
                      <CardComment comment={comment} />
                    </Fragment>
                  )
                })}
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    )
  }
}
