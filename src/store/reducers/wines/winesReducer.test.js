import {types}  from '../../actions/types';
import Enzyme , {shallow} from 'enzyme';
import enzymeAdapter from 'enzyme-adapter-react-16';
import winesReducer from './reducer';

Enzyme.configure({
	adapter: new enzymeAdapter()
})

describe("Wines Reducer" , () => {
	
	it("should return default  state" , () => {
		const newState = winesReducer(undefined, {});
		expect(newState).toEqual({});
	});

	// it("should return new state if receiving type" , () => {
	// 	const wines = [{title: 'Test 1'}, {title: 'Test 3'}, {title: 'Test 3'}];
	// 	const newState = winesReducer(undefined, {
	// 		type: types.GET_WINES,
	// 		payload: wines
	// 	});
	// 	expect(newState).toEqual(wines);
	// })

});