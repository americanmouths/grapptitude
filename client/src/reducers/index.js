import { combineReducers } from 'redux';
import mindfulsReducer from './mindfulsReducer'

const rootReducer = combineReducers({
  mindfuls: mindfulsReducer,
});

export default rootReducer;
