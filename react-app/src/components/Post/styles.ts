import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 329px;
  height: 431.5px;
  padding: 0 0 20px 0;
  gap: 1rem;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);

  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 12px;
    height: 100%;
    overflow: hidden;

    > img {
      height: 198px;
    }

    > h2 {
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 600;
      font-size: 1rem;
      color: #001834;
    }

    .postContent {
      overflow: hidden;
      > p {
        word-break: break-all;
      }
    }
  }

  .modified_gmt {
    display: flex;
    align-items: center;
    gap: 4px;

    color: #474747;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
    line-height: 130.7%;
  }

  .seeMore {
    display: flex;
    align-items: center;
    color: #001834;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
  }

  .text_content {
    word-break: break-all;
    text-overflow: ellipsis;
    color: #333333;
  }
`
