import { fromJS } from 'immutable'
import { constants } from '.';
import { IAction, IState } from "../../../store/reducer";

const defaultState = fromJS({
  articleList: [],
  artiplePage: 1,
  topicList: [],
  // tslint:disable-next-line:object-literal-sort-keys
  recommendItems: [],
  recommendAuthors: []
});

const homeReducer = (state: any = defaultState, action: IAction): IState => {
  switch (action.type) {
    case constants.INIT_TOPIC_LIST_SUCCESS:
       return state.merge({
         topicList: action.payload
       });
    case constants.GET_ARTICLE_LIST_SUCCESS:
       return state.merge({
         articleList: action.payload
       });
    case constants.GET_RECOMMEND_ITEM_SUCCESS:
       return state.merge({
         recommendItems: action.payload
       });
    case constants.GET_RECOMMEND_AUTHOR_SUCCESS:
       return state.merge({
        recommendAuthors: action.payload
       });
    default:
      return state;
  }
}

export default homeReducer;