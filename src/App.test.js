import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store';



const MyContext = React.createContext();



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store} MyContext={MyContext}><App /></Provider> , div);
  ReactDOM.unmountComponentAtNode(div);
});
