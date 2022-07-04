import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  const removePost = () => {
    props.remove(props.post)
  }


  return (
    <div className='post'>
      <div className="post_content">
        <strong>{props.number} {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="post_btns">
        <MyButton onClick={removePost}>remove</MyButton>
      </div>
    </div>
  );
};

export default PostItem;