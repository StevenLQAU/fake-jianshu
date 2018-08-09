import { IAction, IState } from "../../../store/reducer";
import * as Actions from './constants';

const defaultState = {
  focused: false
}

const reducer = (state: IState = defaultState, action: IAction): IState => {
  switch (action.type) {
    case Actions.FOCUS_SEARCH:
      return { ...state, focused: true };
    case Actions.BLUR_SEARCH:
      return { ...state, focused: false };
    default:
      return state;
  }
}

export default reducer;