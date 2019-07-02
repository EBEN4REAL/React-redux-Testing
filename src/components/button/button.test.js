import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import enzymeAdapter from 'enzyme-adapter-react-16';
import SharedButton from './index';
import {findByTestAttribute} from '../../../utils/tests';
import {checkProps} from '../../../utils/tests'; 


Enzyme.configure({
	adapter: new enzymeAdapter()
});

describe('SharedButton Component', () => {

	describe('checking Proptypes' , () => {

		it("should not throw any warning!" , () => {
			const expectedProps = {
				buttonText: 'Example Button Text',
				emitEvent: () => {

				}
			};

			const propsError = checkProps(SharedButton, expectedProps);
			expect(propsError).toBeUndefined();
		})
	});

	describe('Renders' , () => {

		let wrapper;

		beforeEach(() => {

			const props = {
				buttonText: 'Example Button Text',
				emitEvent: () => {

				}
			};

			wrapper = shallow(<SharedButton />);

		});

		it("Should render a button" , () => {
			const button = findByTestAttribute(wrapper, 'buttonComponent');
			expect(button.length).toBe(1);
		});
	});
})
