import React, { Component, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import './home.css';
import LoginHeader from '../header/header';

interface IPostItem {
  name: string; 
  image_path: string;
}

class Home extends Component {
  // TODO better type handling
  public state = {redirect: "", posts: [{name: "test", image_path:""}]};


  public fetchPosts = () => {
    let componentContext = this;

    axios({
      method: "get",
      url: "post",
    })
    .then(function (response) {
      //handle success
      console.log(response)
      var posts = []
      for (let i = 0; i < response.data.length; i++) {
        posts.push({
          "name": response.data[i].post_name,
          "image_path": response.data[i].image_path
        })
      }
      response
      componentContext.setState({posts: posts})
    })
    .catch(function (error) {
      //handle error
      console.error(error)
    });
  }

  public componentDidMount() {
    this.fetchPosts()
  }

  public createPost = () => {
    this.setState({redirect : (<Navigate to="/post" replace={true} />)});
  };

  public render() {
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
          <div>
            <h1>Movie List</h1>
            <ul>
            {
              this.state.posts.map(post => {
                if (post != null) {
                  return <li key={`movie-${post.name}`}>
                  {post.name}
                  <img src={post.image_path} alt="new" className='postImage'/>
                </li>
                }
              })
            }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
