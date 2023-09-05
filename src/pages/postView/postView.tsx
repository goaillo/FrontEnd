import React from 'react'
// import { useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

import './postView.css'

// const getRoutePath = (): any => {
//   const { date } = useParams()
//   return date
// }

class ViewPost extends React.Component<any, any> {
  public state = {
    redirect: '',
    post: { id: '', name: '', image_path: '', start_date: '', end_date: '' },
    steps: [{ id: '', name: '', image_path: '', start_date: '', end_date: '' }]
  }

  public componentDidMount = (): void => {
    // getRoutePath()
    // this.fetchPostAndSteps()
  }

  createPost = (): void => {
    // this.setState({ redirect: (<Navigate to="/step" />) })
  }

  public fetchPostAndSteps (id: string = ''): void {
    axios({
      method: 'get',
      url: `post/${id}/step`
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

  public render (): React.ReactNode {
    console.log(this.props)
    return (
      <div>
        Test to delete
      </div>
      // <div className="Home">
      //   { this.state.redirect }
      //   <LoginHeader/>
      //   {this.props.id}
      //   <div className='bodyHome'>
      //     <div className='actionButtonDiv'>
      //       <div className='actionButton' onClick={this.createPost}>
      //         Add Step
      //       </div>
      //     </div>
      //     <h1>Projects List</h1>
      //     <div className='postContent'>
      //       <div className='postList'>
      //         <ul>
      //         {
      //           this.state.posts.map(post => {
      //             if (post != null && post.name !== '') {
      //               return (
      //                 <li key={`movie-${post.name}`} className='postCard' onClick={() => { this.getPost(post.post_id) }}>
      //                   <div className='postTitle'>
      //                     {post.name}
      //                   </div>
      //                   <img src={post.image_path} alt="new" className='postImage'/>
      //                   <div className='projectDates'>
      //                     {post.start_date} - { post.end_date !== '' ? post.end_date : '...' }
      //                   </div>
      //                 </li>
      //               )
      //             } else {
      //               return null
      //             }
      //           })
      //         }
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default ViewPost
