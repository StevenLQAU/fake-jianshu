import { fromJS } from 'immutable';
import { IAction } from '../../../store/reducer';
import { constants } from './';
const initState = fromJS({
  post: {
    id: 0,
    title: '',
    // tslint:disable-next-line:object-literal-sort-keys
    content: '',
    detail: {
      dateTime: '',
      wordsCount: 0,
      // tslint:disable-next-line:object-literal-sort-keys
      readCount: 0,
      comment: 0,
      like: 0
    },
    author: {
      id: 0,
      name: '',
      // tslint:disable-next-line:object-literal-sort-keys
      avatar: ''
    },
    comments: [
      // {
      //   author: "",
      //   dateTime: "",
      //   // tslint:disable-next-line:object-literal-sort-keys
      //   content: "",
      //   avatar: ""
      // }
    ]
  }
});


const detailReducer = (state: any = initState, action: IAction) => {
  switch (action.type) {
    case constants.GET_POST_SUCCESS:
      return state.merge({
        post: action.payload
      })
    default:
      return state;
  }
}

export default detailReducer;

