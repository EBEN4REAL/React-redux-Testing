import React from 'react';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import WineCard from '../card';

import { makeStyles } from '@material-ui/core/styles';
import Button  from '@material-ui/core/Button';
import {connect}  from 'react-redux';
import Card from '../card';
import axios from 'axios';
import {configParams} from '../../config';
import Loader from '../Loader';


class Wines extends React.Component {

	state = {
		wines: null,
		wineRendered: false,
		clickedGetWinesButton: false,
		currentPage: 1,
		nextPage: null
	}

	componentDidMount(){
		if(this.state.wineRendered){
		  	return this.fetchWines();
	  	}
	}

	fetchWines = () => {
		this.setState({clickedGetWinesButton: true});
		const reqUrl = configParams.apiUrl + `/v1/wines?page=${this.state.currentPage}&limit=25&sort_by=price_low_high`
		let req = axios.get(reqUrl)
			.then(res =>  {
				this.setState({wines: res.data, wineRendered: true, nextPage: res.data.meta.next_href});
			})
				.catch(err => {
					console.log(err);
					if(err !== null){
						this.setState({wineRendered: false});
					}
					
				});
	}

	goToNextPage  = () => {
		let currentPage = this.state.currentPage;
		this.setState({currentPage: currentPage + 1} , this.fetchWines());
	}

	
	
	render(){
	  console.log(this.state.nextPage)
	  const {wineRendered} = this.props;


      let loadWines;
      if(this.state.wines != null){
        loadWines = this.state.wines.wines.map((wine, key) => (
              <Card {...wine} key={key}/>
        ));
        console.log(this.state.wines);
      }

      let button;

      if(this.state.wineRendered){
      		button =  ( 
      			<Button style=
      				{{
      					marginBottom: '20px', 
      					backgroundColor: "grey", 
      					padding: '5px',
      					color: '#FFFFFF',
      					outline: 'none',
      					border: 'none',
      					cursor: 'pointer'
      				}} 
      				color="primary" variant="contained"  onClick={() => this.goToNextPage()}>Load More Wines...</Button>
  			)
  	  }

  	  let loader;

      if(!this.state.wineRendered && this.state.clickedGetWinesButton){
        loader = (
          <Loader />
        )
      }


		return (
			<div data-test='winesComponent'>
				 <Button variant="contained" color="primary" onClick={() => this.fetchWines()}>
		              Load Wines
		         </Button>
		         <div style={{margin: 'o auto' , padding: '10px'}}>
		         	{loader}
		         </div>
		         
				 <Grid container spacing={3}>
				 	{loadWines}
			      </Grid>
			      <div className="moreWines">
			      	 {button}
			      </div>
				 
			</div>
			

		)
	}
	
}

const mapStateToProps = (state) => {
  return {
    wines: state.winesReducer.newWines
  }
}

export default connect(mapStateToProps)(Wines);