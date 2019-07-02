import {shallow} from 'enzyme';
import Headline from './index';
import React from 'react';
import enzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {findByTestAttribute} from '../../../utils/tests';
import checkPropTypes from 'check-prop-types';
import {checkProps} from '../../../utils/tests';

Enzyme.configure({
	adapter: new enzymeAdapter()
});

const setUpComponent = (props={}) => {
	const component = shallow(<Headline {...props} />);
	return component;
}

describe("Headline Component" , () => {

	describe("Checking props types" , () => {
		it("Should not show any warning" , () => {

			const expectedProps = {
				header: 'Test Header',
				desc: 'Test desc',
				tempArr: [{
					name: 'Test Name',
					age: 'Test age',
					isTall: true
				}]
			}
			const propsErr = checkProps(Headline, expectedProps)
			expect(propsErr).toBeUndefined();
		});
	});


	describe("Have props", () => {

		let wrapper;

		beforeEach(() => {
			const props = {
				header: 'Test Header',
				desc: 'Test Desc'
			};
			wrapper = setUpComponent(props);
		});

		it("should render without errors" , () => {
			const component = findByTestAttribute(wrapper, 'HeadLineComponent');
			expect(component.length).toBe(1);
		});

		it("should render a H1" , () => {
			const h1 = findByTestAttribute(wrapper, 'header');
			expect(h1.length).toBe(1);
		});

		it("Should render a p tag" , () => {
			const p = findByTestAttribute(wrapper, 'desc');
			expect(p.length).toBe(1);
		})
	});


	describe("Has NO props" , () => {
		let wrapper;
		beforeEach(() => {
			wrapper = setUpComponent();
		});
		it("should not render" , () => {
			const component = findByTestAttribute(wrapper,'HeadLineComponent');
			expect(component.length).toBe(0);
		});
	});
})
