import * as React from 'react';
import { DetailWrapper, PostContent, PostMetaDate, PostTitle, PostWrapper } from './style';

export class Detail extends React.PureComponent {
  public render() {
    return (
      <DetailWrapper>
        <PostWrapper>
          <PostTitle> 
            七绝 客思
          </PostTitle>
          <PostMetaDate>
              <img className="avatar" src="//upload.jianshu.io/users/upload_avatars/6121595/2a4b2f2b-e68a-405f-a272-d670dd3eb8e0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"/>
              <div className="detail">
                <div>
                  Steven
                </div>
                <div>
                  2018.07.20 20:34* 字数 998 阅读 1083评论 9喜欢 40
                </div>
              </div>
          </PostMetaDate>
          <PostContent>
            最爱上面的字，潇洒飘逸，某人说是被风刮的，哈哈～
          </PostContent>
        </PostWrapper>
      </DetailWrapper>
    )
  }
}