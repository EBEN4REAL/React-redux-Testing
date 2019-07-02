import {types}  from '../../actions/types';

const initialState = {
	currentPage: 1
}

export default (state = initialState , action) => {
	switch(action.type){
		case types.GET_WINES:
		 	return {...state , newWines: action.payload};
	 	case types.GO_TO_NEXT_PAGE:
	 		return {...state, currentPage: action.payload};
 		case types.GO_TO_PREVIOUS_PAGE:
 			return {...state, currentPage: action.payload}
		 default:
		 	return state;
	}
};