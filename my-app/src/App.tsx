import './App.css';
import { useEffect, useState } from 'react'
import Post from './components/Post'
import { InterfacePost } from './interfaces'

function App() {

  useEffect(() => {
    async function fetchPostJSON(){
      const response = await fetch('http://localhost:4000')
      const posts = await response.json()

      setState(posts)
    }

    fetchPostJSON()
  }, [])

  const [state, setState] = useState<InterfacePost[]>()
  console.log(state);


  return (
    <div >
      {
        state && state.map((post: InterfacePost) =>  {
          return <Post 
            header={post.header}
            postText={post.postText}
            author={post.author}
            date={post.date}
          />
        })
      }
    </div>
  );
}

export default App;
