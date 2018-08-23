import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
import { ListItem, ListItemContentSummary, ListItemInfo, ListItemTitle, ListWrapper } from '../style';

class List extends React.PureComponent {
  public render() {
    // tslint:disable-next-line:no-unused-expression
    const { articleList } = (this.props as any)
    return (
      <ListWrapper>
        {
          articleList.toJS().map((item: any) => {
            return (

              <ListItem key={item.id}>
                <img src={item.imageUrl} />
                <Link  className="link" key={item.id} to='/detail'>
                  <ListItemTitle><b>{item.title}</b></ListItemTitle>
                </Link>
                <ListItemContentSummary>{item.contentSummary}</ListItemContentSummary>
                <ListItemInfo>
                  <span>{item.author}</span>
                  <span><i className="iconfont">&#xe61e;</i>{item.like}</span>
                  <span><i className="iconfont">&#xe624;</i>{item.comment}</span>
                </ListItemInfo>
              </ListItem>

            )
          }
          )
        }
        <img src='' />
      </ListWrapper>
    )
  }

  public componentDidMount() {
    (this.props as any).getArticleList();
  }
}

const mapState = (state: any) => ({
  articleList: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'page'])
})

const mapDispatch = (dispatch: any) => ({
  getArticleList: () => {
    dispatch(actionCreators.GetArticleList());
  }
})

export default connect(mapState, mapDispatch)(List)