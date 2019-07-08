import React from 'react';

import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import ListItem from './components/ListItem';
import {connect}  from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import WinesWrapper from './containers/wineWrapper';
import {fetchPosts} from './store/actions';
import Layout from './containers/Layout';


class App extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchPosts());
      }

    render() {

      return (

        <div>
          <Layout>
            <Switch>
              <Route path="/" component={WinesWrapper}  />
            </Switch>
          </Layout>
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
