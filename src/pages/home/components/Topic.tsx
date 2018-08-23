import * as React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { MorePopularTopic, TopicItem, TopicWrapper } from '../style';

interface ITopicProp {
  topicList: any;
  initTopicList: () => {};
}

export class Topic extends React.PureComponent<ITopicProp> {
  public render() {
    const { topicList } = this.props;
    return (
      <TopicWrapper>
        {
          topicList.toJS().map((item: any) => {
            return (
              <TopicItem key={item.id}>
                <img
                  src={item.image}
                  className='topic-pic'
                />
                {item.title}
              </TopicItem>
            )
          })
        }
        <MorePopularTopic>More Pupular Topic ></MorePopularTopic>
      </TopicWrapper>
    )
  }

  public componentDidMount() {
    this.props.initTopicList();
  }
}

const mapState = (state: any) => {
  return {
    topicList: state.getIn(['home', 'topicList'])
  }
}

const mapDispatch = (dispatch: any) => {
  return {
    initTopicList: () => {
      dispatch(actionCreators.getInitTopicList());
    }
  }

}

export default connect(mapState, mapDispatch)(Topic as any)