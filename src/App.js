import React, {useState} from "react";
import './styles/App.css'
import PostsList from "./component/PostsList";
import PostForm from "./component/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'description'},
    {id: 2, title: 'JavaScript 2', body: 'description'},
    {id: 3, title: 'JavaScript 3', body: 'description'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length?
        <PostsList remove={removePost} posts={posts} title='List of posts JS'/>:
        <h1 style={{textAlign:'center', color:'green'}}>Please, create post!</h1>
      }

    </div>
  );
}

export default App;
