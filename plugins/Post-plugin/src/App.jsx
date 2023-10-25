export const App = ({ post }) => {
  return (
    <div className="postContainer">
      <img src="https://picsum.photos/353/198" alt="post" />
      <h2>dasdasdsaddsadasdas</h2>
      <div>asdasdsadsdasad</div>
      <p>
        {new Date(post.modified_gmt).toLocaleString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })}
      </p>
      <p>Ver artigo completo</p>
    </div>
  )
}
