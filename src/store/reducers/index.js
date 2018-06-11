import { combineReducers } from 'redux';
import reducer from '../reducers/reducer';

const rootReducer = combineReducers({
   auth: reducer
});

export default rootReducer;