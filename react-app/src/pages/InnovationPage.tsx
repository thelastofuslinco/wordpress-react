import { useEffect, useState } from 'react'
import Post from '../components/Post'
import { PostModel } from '../models/PostModel'
import { getPosts } from '../services/getPosts'

const InnovationPage = () => {
  const [posts, setPosts] = useState<Array<PostModel>>([])

  useEffect(() => {
    getPosts().then((posts) =>
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
      <div>
        <h2>Conteúdos em destaque</h2>
        <div>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default InnovationPage
