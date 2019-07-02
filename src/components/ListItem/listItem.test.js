import React , {Component} from 'react';
import Enzyme , {shallow} from 'enzyme';
import enzymeAdapter from 'enzyme-adapter-react-16';
import ListItem from './index';
import {findByTestAttribute} from '../../../utils/tests';
import checkPropTypes from 'check-prop-types';
import {checkProps} from '../../../utils/tests';

Enzyme.configure({
	adapter: new enzymeAdapter()
});

describe("ListItem Component" , () => {

	it("props Should not throw a warning" , () => {

		const expectedProps = {
			title: 'Example Title',
			desc: 'Some text'
		};

		const propsErrors = checkProps(ListItem, expectedProps)
		expect(propsErrors).toBeUndefined();
	});

	describe("Component Renders" , () => {

		let wrapper ;

		beforeEach(() => {

			const props = {
				title: 'Example Title',
				desc: 'Some Text'
			};

			wrapper = shallow(<ListItem {...props} />);
		});

		it("Should render without error" , () => {
			const component = findByTestAttribute(wrapper,'ListItem');
			expect(component.length).toBe(1);
		});

		it("Should render a title" , () => {
			const title = findByTestAttribute(wrapper, 'componentTitle');
			expect(title.length).toBe(1);
		});

		it("Should render a desc" , () => {
			const desc = findByTestAttribute(wrapper, 'componentDesc');
			expect(desc.length).toBe(1);
		});
	});

	describe("Should NOT render" , () => {
		let wrapper ;

		beforeEach(() => {

			const props = {
				desc: 'Some Text'
			};

			wrapper = shallow(<ListItem {...props} />);
		});

		it("Component is not rendered" , () => {
			const component = findByTestAttribute(wrapper , "ListItem");
			expect(component.length).toBe(0);
		})
	})


})