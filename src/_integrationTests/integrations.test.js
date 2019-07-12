import React from 'react';
import  moxios from 'moxios';
import {testStore} from '../../utils/tests';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import enzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
	adapter: new enzymeAdapter()
});

describe('FetchWines action' , () => {
	
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	test('Store is updated correctly', () => {
		const expectedState = {
			
		}
	});

	const store = testStore();

	moxios.wait(() => {
		const request = moxios.requests.mostRecent();
		request.respondWith({
			status: 200,
			response: expectedState
		})
	});

	return store.dispatch(fetchPosts())
		.then(() => {
			const newState = store.getState();
			expect(newState.posts).toBe(expectedState);
		})
})