import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import enzymeAdapter from 'enzyme-adapter-react-16';
import WineDetail from './index';

Enzyme.configure({
	adapter: new enzymeAdapter()
});

const setUpComponent = (props={}) => {
	const component = shallow(<WineDetail {...props}/>);
	return component;
}


describe("Wine details component" , () => {

	let componentWrapper;

	beforeEach(() => {
		const props = {
			match: {
				params: {
					id: 290
				}
			}
		}
		componentWrapper = setUpComponent(props);
	});

	it('renders without crashing' , () => {
		const wrapper = componentWrapper.find(`[data-test='${'wineDetails'}']`);
		expect(wrapper.length).toBe(1);
	})
})