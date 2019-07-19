import React from 'react';

import './App.scss';
import Header from './components/Header';
import {connect}  from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import WinesWrapper from './containers/wineWrapper';
import {fetchPosts} from './store/actions';
import Layout from './containers/Layout';
import WineDetails from './components/wineDetail'
import WineReviews from './components/WineReviews';


class App extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchPosts());
      }

    render() {

      return (

        <div>
          <Layout>
            <Switch>
              <Route path="/" exact  component={WinesWrapper}  />
              <Route path="/wines/:id"  component={WineDetails}  />
              <Route path="/wine_reviews"  component={WineReviews}  />
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
