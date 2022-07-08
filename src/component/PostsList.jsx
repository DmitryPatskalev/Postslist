import React from 'react';
import PostItem from "./PostItem";

const PostsList = ({posts, title, remove}) => {
  if(!posts.length){
    return <h1 style={{textAlign: 'center', color: 'green'}}>Please, create post!</h1>
  }
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts.map((post, index) => {
        return <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
      })}
    </div>
  );
};

export default PostsList;