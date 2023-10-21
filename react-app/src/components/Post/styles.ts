import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 353px;
  height: 431.5px;
  padding: 0 0 20px 0;
  gap: 1rem;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);

  > img {
    height: 198px;
  }

  > h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #001834;
  }

  .text_content {
    word-break: break-all;
    text-overflow: ellipsis;
    color: #333333;
  }
`
