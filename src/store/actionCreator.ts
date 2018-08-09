import * as Actions from './actionTypes'
import { IAction } from './reducer';

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
