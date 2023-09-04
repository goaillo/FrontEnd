import React, { Component, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import './home.css';
import LoginHeader from '../header/header';
import moment from 'moment';

interface IPostItem {
  name: string; 
  image_path: string;
}

class Home extends Component {
  // TODO better type handling
  public state = {redirect: "", posts: [{name: "", image_path:"", start_date: "", end_date:""}]};

  public fetchPosts = () => {
    let componentContext = this;

    axios({
      method: "get",
      url: "post",
    })
    .then(function (response) {
      //handle success
      var posts = []
      for (let i = 0; i < response.data.length; i++) {
        let start_date = moment(response.data[i].start_date);
        let end_date = moment(response.data[i].end_date);
        posts.push({
          "name": response.data[i].post_name,
          "image_path": response.data[i].image_path,
          "start_date":  start_date.isValid() ? start_date.format("DD-MM-YYYY"): "",
          "end_date": end_date.isValid() ? end_date.format("DD-MM-YYYY") : "",
        })
      }
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
            <h1>Projets List</h1>
            <ul className='postList'>
            {
              this.state.posts.map(post => {
                if (post != null && post.name != "") {
                  return (
                    <li key={`movie-${post.name}`} className='postCard'>
                      <div className='postTitle'>
                        {post.name}
                      </div>
                      <img src={post.image_path} alt="new" className='postImage'/>
                      <div className='projectDates'>
                        {post.start_date} :: { post.end_date != "" ? post.end_date : "..." }
                      </div>
                    </li>
                  )
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
