import React from 'react';
import {shallow}  from 'enzyme';
import Header from './index';

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {findByTestAttribute} from '../../../utils/tests';


Enzyme.configure({
	adapter: new EnzymeAdapter(),
});

const setUp = (props={}) => {
	const component =shallow(<Header {...props} />);
	return component;
}


describe('Header Component' , () => {

	let component;

	beforeEach(() => {
		component = setUp();
	})

	it('It should render without errors' , () => {
		const component = setUp();
		const wrapper = findByTestAttribute(component, 'headerComponent');
		expect(wrapper.length).toBe(1);
	})

	it("Should render a logo" , () => {
		const component = setUp();
		const wrapper = findByTestAttribute(component, 'logoImg');
		expect(wrapper.length).toBe(1);
	})
})