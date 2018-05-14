import { combineReducers } from 'redux';
import mindfulsReducer from './mindfulsReducer'
import greatsReducer from './greatsReducer'


const rootReducer = combineReducers({
  mindfuls: mindfulsReducer,
  greats: greatsReducer
});

export default rootReducer;
