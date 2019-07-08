import {combineReducers} from 'redux';
import winesReducer from './wines/reducer' ;
import postsReducer from './posts/postsReducers';


export default combineReducers({
	winesReducer,
	postsReducer
})