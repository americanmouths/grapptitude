import { combineReducers } from 'redux';
import mindfulsReducer from './mindfulsReducer';
import greatsReducer from './greatsReducer';
import userGreatsReducer from './userGreatsReducer';
import { userAuthReducer } from './userAuthReducer';
import testReducer from './testReducer';

const rootReducer = combineReducers({
  mindfuls: mindfulsReducer,
  greats: greatsReducer,
  userGreats: userGreatsReducer,
  userAuth: userAuthReducer,
  test: testReducer
});

export default rootReducer;
