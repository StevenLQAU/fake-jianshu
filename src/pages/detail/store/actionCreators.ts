
import axios from 'axios';
import { fromJS } from 'immutable';
import { IAction } from '../../../store/reducer';
import { constants } from './';

export const GetPost = () => {
  return (dispatch: any) => {
    axios.get('/api/post.json').then((res) => {
      dispatch(GetPostSuccess(res.data.data));
    });
  }
}

const GetPostSuccess = (post: any): IAction => {
  return {
    type: constants.GET_POST_SUCCESS,
    // tslint:disable-next-line:object-literal-sort-keys
    payload: fromJS(post)
  }
}