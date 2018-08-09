import axios from 'axios';
import { fromJS } from 'immutable';
import { IAction } from '../../../store/reducer';
import * as Actions from './constants'

const getGetListSuccess = (list: string[]): IAction => {
  return {
    payload: fromJS(list),
    type: Actions.GET_LIST_SUCCESS
  }
}

export const getFocusSearch = (): IAction => {
  return {
    type: Actions.FOCUS_SEARCH
  };
}

export const getBlurSearch = (): IAction => {
  return {
    type: Actions.BLUR_SEARCH
  };
}

export const getGetList = () => {
  return (dispatch: any) => {
    axios.get('api/headerlist.json').then((res) => {
      const list = res.data.data;
      dispatch(getGetListSuccess(list));
    });
  }
}


