import {types}  from '../../actions/types';

const initialState = {
	currentPage: 1
}

export default (state = initialState , action) => {
	switch(action.type){
		case types.GET_WINES:
		 	return {...state , newWines: action.payload};
	 	case types.GET_CURRENT_PAGE:
	 		return {...state, currentPage: initialState.currentPage + 1}
		 default:
		 	return state;
	}
};