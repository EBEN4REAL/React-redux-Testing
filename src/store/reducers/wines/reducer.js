import {types}  from '../../actions/types';

export default (state={} , action) => {
	switch(action.type){
		case types.GET_WINES:
		 	return {...state , newWines: action.payload};
	 	case types.GET_CURRENT_PAGE:
	 		return {...state, currentPage: action.payload}
		 default:
		 	return state;
	}
};