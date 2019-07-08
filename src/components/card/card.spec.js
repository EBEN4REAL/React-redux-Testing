import {shallow}  from 'enzyme';

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';


Enzyme.configure({
	adapter: new EnzymeAdapter(),
});

import Card from './index';
import React from 'react';
import {store} from '../../store';
import {Provider} from 'react-redux';
import {findByTestAttribute} from '../../../utils/tests';
import ReactDOM from 'react-dom';

describe("Card Component" , () => {
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<Provider store={store}><Card /></Provider> , div);
	});
});