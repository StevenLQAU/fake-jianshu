import { fromJS } from 'immutable'
import { constants } from '.';
import { IAction, IState } from "../../../store/reducer";

const defaultState = fromJS({
  focused: false
});

const reducer = (state: any = defaultState, action: IAction): IState => {
  switch (action.type) {
    case constants.FOCUS_SEARCH:
      return state.set('focused', true);
    case constants.BLUR_SEARCH:
      return state.set('focused', false);
    default:
      return state;
  }
}

export default reducer;