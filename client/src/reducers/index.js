import { combineReducers } from 'redux';
import mindfulsReducer from './mindfulsReducer';
import greatsReducer from './greatsReducer';
import userGreatsReducer from './userGreatsReducer';


const rootReducer = combineReducers({
  mindfuls: mindfulsReducer,
  greats: greatsReducer,
  userGreats: userGreatsReducer
});

export default rootReducer;
