import { useEffect, useState } from 'react'
import { PostModel } from '../../models/PostModel'
import { getPostById, getPosts } from '../../services/getPosts'
import { useParams } from 'react-router-dom'

const ArticlePage = () => {
  const [post, setPost] = useState<PostModel>()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      getPostById(id).then((post) =>
        setPost(
          post.map((post: any) => ({
            id: post.id,
            title: post.title.rendered,
            content: post.content.rendered,
            author: post.author,
            modified_gmt: post.modified_gmt
          }))
        )
      )
    }
  }, [])

  return <div>ArticlePage</div>
}

export default ArticlePage
