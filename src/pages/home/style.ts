import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;

  .banner-image{
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
  padding-top: 30px;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #f0f0f0;
`;

export const TopicItem = styled.div`
  height: 32px;
  line-height: 32px;
  float: left;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  margin-left: 18px;
  margin-bottom: 18px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;


  .topic-pic {
    display: block;
    float: left;
    height: 32px;
    width: 32px;
    margin-right: 10px;
  }
`;

export const MorePopularTopic = styled.div`
  height: 32px;
  line-height: 32px;
  float: left;
  font-size: 14px;
  color: #787878;
  margin-left: 18px;
  margin-bottom: 18px;
`;

export const ListWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  margin-top: 10px;
`;

export const ListItem = styled.div`
  overflow: hidden;
  width: 100%;
  margin-bottom: 10px;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
  .link{
    text-decoration: none;
  }

  img {
    height: 100px;
    width: 125px;
    border-radius: 4px;
    float: right;
    margin-left: 5px;
    margin-top: 5px;
  }
`;

export const ListItemTitle = styled.div`
  font-size: 18px;
  line-height: 30px;
  font-weight: 700;
  line-height: 1.5;
  color: #333;
  text-decoration: none;
`

export const ListItemContentSummary = styled.div`
  font-size: 15px;
  line-height: 24px;
  color: #999;
  margin-top: 10px;
  overflow: hidden;

  
`;

export const ListItemInfo = styled.div`
  font-size: 14px;
  color: #b4b4b4;
  margin-top: 10px;
  padding:5px 0;
  span {
    margin-right: 10px;
  }
  .iconfont {
    font-size: 13px;
  }
`;

export const RecommendWrapper = styled.div`
  overflow: hidden;
`; 

export const RecommendItem = styled.div`
  margin-bottom: 6px;
  border-radius: 4px;
  a {
    display: block;

    img {
      height: 50px;
      width: 280;
    }
  }

`;

export const RecommendAuthorWrapper = styled.div`
  margin-top: 20px;
  overflow: hidden;
  padding: 0;
`;

export const RecommendInfo = styled.div`
  font-size: 14px;
  color: #969696;

  .iconfont{
    font-size: 13px;
  }

  span.changeList {
    float: right;
  }
`;

export const RecommendAuthorItem = styled.div`
  margin-top: 15px;
  height: 50px;
  line-height: 20px;
  .avatar{
    border: 0;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    float: left;
    margin-right: 10px;
  }

  .info {
    margin-left: 20px;
    .authorName {
      font-size: 14px;
      color: #333
    }
    .follow {
      font-size: 13px;
      color: #42c02e;
      float: right;
      margin-top: 4px;
    }
  }

  .otherInfo {
    font-size: 12px;
    color: #969696
  }
`;

export const CheckAllRecommend = styled.div`
  width: 100%;
  padding: 7px 7px 7px 7px;
  font-size: 13px;
  color: #787878;
  border-radius: 4px;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  text-align: center;
  box-sizing: border-box;
  margin-top: 10px;
`;