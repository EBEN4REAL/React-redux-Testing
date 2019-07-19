import axios from 'axios';
import {types} from './types';
import {configParams} from '../../config';
import {connect} from 'react-redux';


export const fetchWines = () => {
	let req = axios.get(configParams.apiUrl)
		.then(res =>  res.data)
			.catch(err => {
				console.log(err);
			});
	return {
		type: types.GET_WINES,
		payload: req,
	}
}

export const goToNextPage = (page) => {
	return {
		type: types.GO_TO_NEXT_PAGE,
		payload: page + 1
	}
}

export const goToPreviousPage = (page) => {
	return {
		type: types.GO_TO_PREVIOUS_PAGE,
		payload: page - 1
	}
}



export const showLoader = (value) => {
	return {
		type: types.SHOW_LOADER,
		payload: value
	}
}

