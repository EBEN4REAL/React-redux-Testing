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
			meta: {
				next_href: "/api/v1/wines?page=2&limit=25&sort_by=price_low_high"
			},
			wines: {
				[
					{
						id: 290,
						variant_id:'456789fvbnm,',
						is_available: true,
						rebuy_rating: 0,
						is_bookmarked: false,
						media: [{type: "image", subtype: null, public_id: "xtw4mlvtiej74p4nojdg", background_color: null}],
						name: "Syrah",
						price: {original: 11, currency: "GBP", actual: 9.85},
						actual: 9.85,
						currency: "GBP",
						original: 11,
						producer: [{about: "about_producer"}, {id: 98} , {media: [{name: "name"}]}],	
					},
					{
						id: 290,
						variant_id:'567890yhjkl;',
						is_available: true,
						rebuy_rating: 0,
						is_bookmarked: false,
						media: [{type: "image", subtype: null, public_id: "xtw4mlvtiej74p4nojdg", background_color: null}],
						name: "Syrah",
						price: {original: 11, currency: "GBP", actual: 9.85},
						actual: 9.85,
						currency: "GBP",
						original: 11,
						producer: [{about: "about_producer"}, {id: 98} , {media: [{name: "name"}]}],	
					},

				]
			}
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