import { fromJS } from 'immutable'
import { constants } from '.';
import { IAction, IState } from "../../../store/reducer";

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  // tslint:disable-next-line:object-literal-sort-keys
  list: [],
  page: 1,
  totalPage: 1,
  showScrollToTop: false
});

const reducer = (state: any = defaultState, action: IAction): IState => {
  switch (action.type) {
    case constants.FOCUS_SEARCH:
      return state.set('focused', true);
    case constants.BLUR_SEARCH:
      return state.set('focused', false);
    case constants.GET_LIST_SUCCESS:
      return state.merge({
        list: action.payload.list,
        totalPage: action.payload.totalPage
      })
    case constants.SET_MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.SET_MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constants.CHANGE_PAGE:
      return state.set('page', action.payload);
    case constants.CHANGE_SCROLLTOP_SHOW:
      return state.set('showScrollToTop', action.payload);
    default:
      return state;
  }
}

export default reducer;