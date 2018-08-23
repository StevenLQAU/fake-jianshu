import * as React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { CheckAllRecommend, RecommendAuthorItem, RecommendAuthorWrapper, RecommendInfo } from '../style';

class RecommendAuthor extends React.PureComponent {
  public render() {

    const { recommendAuthors } = (this.props as any)

    return (
      <RecommendAuthorWrapper>
        <RecommendInfo>
          <span>Recommended Author</span>
          <span className="changeList">
            <i className="iconfont spin">&#xe746;</i> Change
          </span>
        </RecommendInfo>

        {
          recommendAuthors.toJS().map((item: any) => {
            return (
              <RecommendAuthorItem key={item.id}>
                <img className="avatar" src={item.imageUrl} />
                <div className="detail">
                  <div className="info">
                    <span className="authorName">{item.name}</span>
                    <span className="follow">Follow</span>
                  </div>
                  <div className="otherInfo">
                    <span>Wrote: {item.wrote} words</span>
                    <span> / </span>
                    <span>{item.like} Like</span>
                  </div>
                </div>
              </RecommendAuthorItem>
            );
          })
        }       
        <CheckAllRecommend>Check All ></CheckAllRecommend>
      </RecommendAuthorWrapper>
    )
  }

  public componentDidMount() {
    (this.props as any).getRecommendAuthor();
  }
}

const mapState = (state: any) => ({
  recommendAuthors: state.getIn(['home', 'recommendAuthors'])

});

const mapDispatch = (dispatch: any) => ({
  getRecommendAuthor: () => {
    dispatch(actionCreators.GetRecommendAuthor());
  }

})

export default connect(mapState, mapDispatch)(RecommendAuthor);