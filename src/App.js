import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostsList from "./component/PostsList";
import PostForm from "./component/PostForm";
import PostFilter from "./component/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Language of Programming'},
    {id: 2, title: 'React', body: 'Library of JS'},
    {id: 3, title: 'Type Script', body: 'Dialect of JS'},
  ])

  const [filter, setFilter] = useState({post: '', query: ''})

  const sortedPosts = useMemo(() => {
    console.log('function sort is done')
    return filter.sort ?
      [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort])) :
      posts
  }, [filter.sort, posts])

  const sortedAndSearchedPost = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostsList remove={removePost} posts={sortedAndSearchedPost} title='List of posts JS'/>
    </div>
  );
}

export default App;
