import {shallow} from 'enzyme';
import enzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import Card from './index';
import React from 'react';
import {store} from '../../store';
import {Provider} from 'react-redux';
import {findByTestAttribute} from '../../../utils/tests';
import ReactDOM from 'react-dom';

Enzyme.configure({
	adapter: new enzymeAdapter()
});

const MyContext = React.createContext();


describe("Card Component" , () => {
	// it("Should render without crashing" , () => {
	// 	const component = shallow(<Provider store={store} MyContext={MyContext}><Card /></Provider>);
	// 	const wrapper = component.find(`[data-test="cardComponent"]`);
	// 	expect(wrapper.length).toBe(1);
	// });

	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<Provider store={store} MyContext={MyContext}><Card /></Provider> , div);
	});
});