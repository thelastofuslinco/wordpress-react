import { useEffect, useState } from 'react'
import Header from './components/Header'
import Post from './components/Post'
import { PostModel } from './models/PostModel'

function App() {
  const [posts, setPosts] = useState<Array<PostModel>>([])

  useEffect(() => {
    fetch('http://localhost:8000/?rest_route=/wp/v2/posts')
      .then((response) => response.json())
      .then((posts) =>
        setPosts(
          posts.map((post: any) => ({
            id: post.id,
            title: post.title.rendered,
            content: post.content.rendered,
            author: post.author,
            modified_gmt: post.modified_gmt
          }))
        )
      )
  }, [])

  console.log(posts)

  return (
    <div>
      <Header title="BLOG" subtitle="Inovação e Tecnologia" />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default App
