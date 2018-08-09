import * as Actions from './actionTypes';

const defaultState = {
  focused: false
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IState {
  focused: boolean;
}

export const reducer = (state: IState = defaultState, action: IAction): IState => {
  switch (action.type) {
    case Actions.FOCUS_SEARCH:
      return { ...state, focused: true };
    case Actions.BLUR_SEARCH:
      return { ...state, focused: false };
    default:
      return state;
  }
}
