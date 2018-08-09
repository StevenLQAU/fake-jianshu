import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/header/store';


export interface IAction {
  type: string;
  payload?: any;
}

export interface IState {
  focused: boolean;
}

const reducer = combineReducers({
  header: headerReducer
})

export default reducer;