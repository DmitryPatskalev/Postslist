import React, {useState} from "react";
import './styles/App.css'
import PostsList from "./component/PostsList";
import PostForm from "./component/PostForm";
import MySelect from "./component/UI/select/MySelect";
import MyInput from "./component/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Language of Programming'},
    {id: 2, title: 'React', body: 'Library of JS'},
    {id: 3, title: 'Type Script', body: 'Dialect of JS'},
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  let getSortedPost = ()=>{
    console.log('function sort is done')
    return selectedSort?
      [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort])):
      posts
  }


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const sortPost = (sort) => {
    setSelectedSort(sort)
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Search....'
        />
        <MySelect
          value={selectedSort}
          onChange={sortPost}
          defaultValue='Sort'
          options={[
            {value: 'title', name: 'by name'},
            {value: 'body', name: 'by description'}
          ]}
        />
      </div>
      {posts.length ?
        <PostsList remove={removePost} posts={getSortedPost()} title='List of posts JS'/> :
        <h1 style={{textAlign: 'center', color: 'green'}}>Please, create post!</h1>
      }

    </div>
  );
}

export default App;
