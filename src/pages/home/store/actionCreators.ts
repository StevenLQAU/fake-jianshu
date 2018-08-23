import axios from 'axios';
import { fromJS } from 'immutable'
import { IAction } from '../../../store/reducer';
import * as constants from './constants';

export const getInitTopicList = () => {
  return (dispatch: any) => {
    axios.get('api/topicList.json').then((res) => {
      dispatch(getInitTopicListSuccess(res.data.data))
    });
  }
}

export const GetArticleList = () => {
  return (dispatch: any) => {
    axios.get('api/articleList.json').then((res) => {
      dispatch(GetArticleListSuccess(res.data.data));
    });
  }
}

export const GetRecommendItem = () => {
  return (dispatch: any) => {
    axios.get('api/recommendItems.json').then((res) => {
      dispatch(GetRecommendItemSuccess(res.data.data));
    });
  }
}

export const GetRecommendAuthor = () => {
  return (dispatch : any) => {
    axios.get('api/recommendAuthor.json').then((res) => {
      dispatch(GetRecommendAuthorSuccess(res.data.data));
    });
  }
}

const getInitTopicListSuccess = (topicList: any): IAction => {
  return {
    payload: fromJS(topicList),
    type: constants.INIT_TOPIC_LIST_SUCCESS
  }
}

const GetArticleListSuccess = (articleList: any) => {
  return {
    payload: fromJS(articleList),
    type: constants.GET_ARTICLE_LIST_SUCCESS
  }
}

const GetRecommendItemSuccess = (recommendItems: any) => {
  return {
    payload: fromJS(recommendItems),
    type: constants.GET_RECOMMEND_ITEM_SUCCESS
  }
}

const GetRecommendAuthorSuccess = (recommendAuthor: any) => {
  return {
    payload: fromJS(recommendAuthor),
    type: constants.GET_RECOMMEND_AUTHOR_SUCCESS
  }
}