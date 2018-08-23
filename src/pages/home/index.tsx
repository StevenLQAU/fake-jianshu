import * as React from 'react';
import banner from '../../statics/images/banner.jpg';
import List from './components/List';
import RecommendAuthor from './components/RecommendAuthor';
import Recommend from './components/Recomment';
import Topic from './components/Topic';
import { HomeLeft, HomeRight, HomeWrapper } from './style';

export class Home extends React.PureComponent {
  public render() {
    return (
      <HomeWrapper >
        <HomeLeft>
          <img
            className='banner-image'
            src={banner}
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <RecommendAuthor />
        </HomeRight>
      </HomeWrapper>
    )
  }
}