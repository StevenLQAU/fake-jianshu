import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { detailReducer }from '../pages/detail/store';
import { homeReducer } from '../pages/home/store';

export interface IAction {
  type: string;
  payload?: any;
}

export interface IState {
  focused: boolean;
}

const reducer = combineReducers({
  detail: detailReducer,
  header: headerReducer,
  home: homeReducer 
})

export default reducer;