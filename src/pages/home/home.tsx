import React from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

import LoginHeader from '../header/header'

import './home.css'

class Home extends React.Component {
  // TODO better type handling
  public state = { redirect: '', posts: [{ post_id: '', name: '', image_path: '', start_date: '', end_date: '' }] }

  public fetchPosts (): void {
    axios({
      method: 'get',
      url: 'post'
    })
      .then((response) => {
        // handle success
        const posts = []
        for (let i = 0; i < response.data.length; i++) {
          const startDate = moment(response.data[i].start_date)
          const endDate = moment(response.data[i].end_date)
          posts.push({
            post_id: response.data[i].post_id,
            name: response.data[i].post_name,
            image_path: response.data[i].image_path,
            start_date: startDate.isValid() ? startDate.format('DD-MM-YYYY') : '',
            end_date: endDate.isValid() ? endDate.format('DD-MM-YYYY') : ''
          })
        }
        this.setState({ posts })
      })
      .catch(function (error) {
        // handle error
        console.error(error)
      })
  }

  public componentDidMount (): void {
    this.fetchPosts()
  }

  createPost = (): void => {
    this.setState({ redirect: (<Navigate to="/post" />) })
  }

  getPost = (id: string): void => {
    this.setState({ redirect: (<Navigate to={'/post/' + id} />) })
  }

  public render (): React.ReactNode {
    return (
      <div className="Home">
        { this.state.redirect }
        <LoginHeader/>
        <div className='bodyHome'>
          <div className='actionButtonDiv'>
            <div className='actionButton' onClick={this.createPost}>
              Add Post
            </div>
          </div>
          <h1>Projects List</h1>
          <div className='postContent'>
            <div className='postList'>
              <ul>
              {
                this.state.posts.map(post => {
                  if (post != null && post.name !== '') {
                    return (
                      <li key={`movie-${post.name}`} className='postCard' onClick={() => { this.getPost(post.post_id) }}>
                        <div className='postTitle'>
                          {post.name}
                        </div>
                        <img src={post.image_path} alt="new" className='postImage'/>
                        <div className='projectDates'>
                          {post.start_date} - { post.end_date !== '' ? post.end_date : '...' }
                        </div>
                      </li>
                    )
                  } else {
                    return null
                  }
                })
              }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
