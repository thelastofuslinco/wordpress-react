import { PostModel } from '../../models/PostModel'
import { PostContainer } from './styles'

interface Props {
  post: PostModel
}

const Post = ({ post }: Props) => {
  return (
    <PostContainer>
      <img src="https://picsum.photos/353/198" alt="post" />
      <h2>{post.title}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: post.content
        }}
      />
      <p>
        {new Date(post.modified_gmt).toLocaleString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })}
      </p>
      <p>Ver artigo completa</p>
    </PostContainer>
  )
}

export default Post
