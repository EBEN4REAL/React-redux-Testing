import React from 'react';

import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import ListItem from './components/ListItem';
import {connect}  from 'react-redux';
import {Switch, Router} from 'react-router-dom';
import WinesWrapper from './containers/wineWrapper';


class App extends React.Component {

    render() {

      return (
        <div >
          <Header />
          <WinesWrapper />
        </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    wines: state.winesReducer.newWines
  }
}

export default connect(mapStateToProps)(App);
