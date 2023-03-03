import React from 'react'
import './post.css'
import postImage from "../../assets/post-test.jpg"

function Post() {
  return (
    <div className='post'>
      <img src={postImage} alt="" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Law</span>
          <span className="postCat">Cricket</span>
          <span className="postCat">Administration</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit.</span>
        <span className="postDate">1 hour ago</span>
        <p class="postDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, temporibus nulla? Aut et expedita, voluptate obcaecati eaque suscipit facilis dolorem repellendus ex nisi provident reprehenderit! Fugiat animi architecto assumenda officiis.
        </p>
      </div>

    </div>
  )
}

export default Post
