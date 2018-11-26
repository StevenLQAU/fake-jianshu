import * as React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Comment, CommentContent, CommentFunction, Comments, CommentsSummary, DetailWrapper, LikeButton, PostContent, PostMetaDate, PostTitle, PostWrapper } from './style';
export class Detail extends React.PureComponent {
  public render() {
    const { post } = this.props as any
    const postJS = post.toJS();
    return (
      <DetailWrapper>
        <PostWrapper>
          <PostTitle>
            {postJS.title}
          </PostTitle>
          <PostMetaDate>
            <img className="avatar" src={postJS.author.avatar} />
            <div className="detail">
              <div className="author-name">
                <span>
                  {postJS.author.name}
                </span>
                <span className="follow">
                  follow
                  </span>
              </div>
              <div className="detail-info">
                <span>{postJS.detail.dateTime}</span>
                <span>Words {postJS.detail.wordsCount}</span>
                <span>Read {postJS.detail.readCount}</span>
                <span>Comments {postJS.detail.comment}</span>
                <span>Like {postJS.detail.like}</span>
              </div>
            </div>
          </PostMetaDate>
          <PostContent dangerouslySetInnerHTML={{ __html: postJS.content }} />
          <LikeButton>
            <span className="like">
              <i className="iconfont">&#xe6ad;</i> Like <span className="spliter">|</span> 20
            </span>
          </LikeButton>
          <Comments>
            <CommentsSummary>
              {(this.props as any).post.toJS().comments.length} Comments
            </CommentsSummary>
            {
              this.DisplayComments()
            }
          </Comments>
        </PostWrapper>
      </DetailWrapper>
    )
  }

  public componentDidMount() {
    (this.props as any).getPost();
  }

  private DisplayComments = () => {
    const comments = (this.props as any).post.toJS().comments;
    // const result = [];
    return comments.map((item: any) => {
      return (
        <Comment key={item.id}>
          <PostMetaDate>
            <img className="avatar" src={item.avatar} />
            <div className="detail">
              <div className="author-name">
                <span>
                  {item.author}
                </span>
              </div>
              <div className="detail-info">
                <span>{item.dateTime}</span>
              </div>
            </div>
          </PostMetaDate>
          <CommentContent>
            {item.content}
          </CommentContent>
          <CommentFunction>
            <span className="function">
              <i className="iconfont">&#xe616;</i> Like
                </span>
            <span className="function">
              <i className="iconfont">&#xe7ac;</i> Reply
                </span>
          </CommentFunction>
        </Comment>
      )
    });
  }
}

const mapState = (state: any) => ({
  post: state.getIn(['detail', 'post'])
});

const mapDispatch = (dispatch: any) => {
  return {
    getPost: () => {
      dispatch(actionCreators.GetPost())
    }
  }
};

export default connect(mapState, mapDispatch)(Detail)
