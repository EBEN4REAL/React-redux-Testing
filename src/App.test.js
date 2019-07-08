import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store';
import {BrowserRouter}  from 'react-router-dom';



const MyContext = React.createContext();



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Provider store={store} MyContext={MyContext}><App /></Provider></BrowserRouter> , div);
  ReactDOM.unmountComponentAtNode(div);
});
