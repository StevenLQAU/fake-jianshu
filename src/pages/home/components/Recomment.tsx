import * as React from 'react';
import { connect} from 'react-redux';
import { actionCreators } from '../store';
import { RecommendItem, RecommendWrapper } from '../style';

class Recommend extends React.PureComponent {
  public render() {
    const { recommendItems } = (this.props as any);
    return (
      <RecommendWrapper>
        {
          recommendItems.toJS().map((item: any)=>{
            return (
              <RecommendItem key={item.id}>
                <a ><img src={item.imageUrl}/></a >
              </RecommendItem>
            );
          })
        }
      </RecommendWrapper>
    )
  }

  public componentDidMount() {
    (this.props as any).getRecommendList();
  }
}

const mapState = (state: any) => ({
  recommendItems: state.getIn(['home', 'recommendItems'])
});

const mapDispatch = (dispatch: any) => ({
  getRecommendList: () => {
    dispatch(actionCreators.GetRecommendItem())
  }
});

export default connect(mapState, mapDispatch)(Recommend)