import axios from 'axios';
import { fromJS } from 'immutable';
import { IAction } from '../../../store/reducer';
import * as Actions from './constants'

const getGetListSuccess = (list: string[]): IAction => {
  return {
    payload: {
      list:fromJS(list),
      totalPage: Math.ceil(list.length / 10)
    },  
    type: Actions.GET_LIST_SUCCESS
  }
}

const getChangeScrolltopShowSuccess = (show: boolean): IAction => {
  return {
    payload: show,
    type: Actions.CHANGE_SCROLLTOP_SHOW
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

export const getSetMouseEnter = () => {
  return {
    type: Actions.SET_MOUSE_ENTER
  }
}

export const getSetMouseLeave = () => {
  return {
    type: Actions.SET_MOUSE_LEAVE
  }
}

export const getChangePage = (newPage: number) => {
  return {
    payload: newPage,
    type: Actions.CHANGE_PAGE
  }
}

export const getChangeScrollTopShow = (scrollTop: number) => {
  return (dispatch: any)=> {
    dispatch(getChangeScrolltopShowSuccess(scrollTop> 500 ? true : false));
  }
}


