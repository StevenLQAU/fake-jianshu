import styled from 'styled-components';

export const DetailWrapper = styled.div`
  padding-top: 10px;
`;


export const PostWrapper = styled.div`
  overflow: hidden;
  width: 620px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px; 
`

export const PostTitle = styled.div`
  font-size: 34px;
  font-weight: 700;
  line-height: 1.3;
  margin: 20px 0 0 ;
`

export const PostMetaDate = styled.div`
  margin: 30px 0 40px;
  width: 100%;
  overflow: hidden;
  .avatar{
    border: 0;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    float: left;
    margin-right: 10px;
  }
  .detail{
    float: left;
    margin-left: 10px;
    .author-name {
      font-size: 16px;
      color: #333;
    }
    .follow {
      background-color: #42c02e;
      border-radius: 10px;
      color: #fff;
      margin-left: 10px;
      font-size: 13px;
      padding: 1px 7px;
    }

    .detail-info{
      font-size: 13px;
      color: #969696;
      margin-top: 10px;
      span {
        margin-right: 10px;
      }
    }
  }
`

export const PostContent = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
`
export const Comments = styled.div`
  padding: 20px 0;
  margin-top: 20px;
`;

export const CommentsSummary = styled.div`

`;

export const Comment = styled.div`
  border-top: 1px solid #dcdcdc;
  padding: 20px 0;
  margin-top: 20px;

`;

export const CommentContent = styled.div`
  margin: 10px 0 20px;
`;

export const CommentFunction = styled.div`
  font-size: 16px;
  color: #969696;
  .function {
    margin-right: 20px;
    cursor: pointer;
  }
  .function:hover{
    color: red;
  }
`;

export const LikeButton = styled.div`
  margin-top: 60px;
  height: 57px;
  box-sizing: content-box;
  cursor: pointer;
  .like {
    color: #EA6F5A;
    border: 1px solid #EA6F5A;
    border-radius: 30px;
    padding: 15px 20px;
  }
  .like:hover {
    background: rgb(234, 111, 90, 0.1);
  }

  .spliter {
    margin: 0 7px;
  }
`;