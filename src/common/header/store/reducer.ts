import { constants } from '.';
import { IAction, IState } from "../../../store/reducer";

const defaultState = {
  focused: false
}

const reducer = (state: IState = defaultState, action: IAction): IState => {
  switch (action.type) {
    case constants.FOCUS_SEARCH:
      return { ...state, focused: true };
    case constants.BLUR_SEARCH:
      return { ...state, focused: false };
    default:
      return state;
  }
}

export default reducer;