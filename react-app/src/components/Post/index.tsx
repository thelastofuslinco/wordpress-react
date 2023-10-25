import { PostModel } from '../../models/PostModel'
import { PostContainer } from './styles'
import { GoCalendar, GoChevronRight } from 'react-icons/go'
import * as imageSrc from '../../images/work.png'

interface Props {
  post: PostModel
}

const Post = ({ post }: Props) => {
  return (
    <PostContainer>
      <img src={imageSrc.default} alt="post" />
      <div>
        <p className="modified_gmt">
          <GoCalendar />
          {new Date(post.modified_gmt).toLocaleString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          })}
        </p>
        <h2>{post.title}</h2>
        <div
          className="postContent"
          dangerouslySetInnerHTML={{
            __html: post.content
          }}
        />

        <p className="seeMore">
          Ver artigo completa <GoChevronRight />
        </p>
      </div>
    </PostContainer>
  )
}

export default Post
