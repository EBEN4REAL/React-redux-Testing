import React from 'react';

import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Headline from './components/Headline';
import ListItem from './components/ListItem';
import {connect}  from 'react-redux';
import {fetchWines} from './store/actions';
import Button from '@material-ui/core/Button';
import Wines from './components/WinesComponent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Loader from './components/Loader';


class App extends React.Component {

  state = {
    wineRendered: false,
    clickedGetWinesButton: false,
    nextUrl: null,
    currentPage: 1
  }


    fetchWines = () => {
        this.setState({clickedGetWinesButton: true})
        this.props.dispatch(fetchWines()).then(res => {
          this.setState({wineRendered: true});
          this.setState({nextUrl: res.payload.meta.next_href});
      })
    }
  
    render() {

      return (
        <div >
          <Header />
          <section className="main">
            <Headline header="Wines"  desc="Click the button to render wines!"/>
            <div style={{marginTop: '50px', marginBottom: '50px'}}>
              <Wines wineRendered={this.state.wineRendered} currentPage={this.state.currentPage}/>
            </div>
           
          </section>
          
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
