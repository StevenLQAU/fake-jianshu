import { IAction } from '../../../store/reducer';
import * as Actions from './constants'


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
