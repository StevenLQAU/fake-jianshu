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
  }

`

export const PostContent = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
`
