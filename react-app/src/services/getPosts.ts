export const getPosts = async () =>
  fetch('http://localhost:8000/?rest_route=/wp/v2/posts').then((response) =>
    response.json()
  )

export const getPostById = async (id: string) =>
  fetch(`http://localhost:8000/?rest_route=/wp/v2/posts/${id}`).then(
    (response) => response.json()
  )
