import { compose, createStore } from 'redux';
import reducer from './reducer'

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION__() || compose;

// export const store = createStore(reducer, composeEnhancers());
export const store = createStore(reducer, compose(
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
));
