import React from 'react';


import Grid from '@material-ui/core/Grid';
import Button  from '@material-ui/core/Button';
import {connect}  from 'react-redux';
import Card from '../card';
import axios from 'axios';
import {configParams} from '../../config';
import Loader from '../Loader';
import {goToNextPage} from '../../store/actions';
import {goToPreviousPage}  from '../../store/actions';


class Wines extends React.Component {

	state = {
		wines: null,
		wineRendered: false,
		clickedGetWinesButton: false,
		nextPage: null
	}

	componentDidMount(){
		if(this.state.wineRendered){
		  	return this.fetchWines();
	  	}
	}

	fetchWines = () => {
		this.setState({clickedGetWinesButton: true});
		const reqUrl = "https://test.wineapp.me/api/v1/wines?page=" + this.props.currentPage + "&limit=25&sort_by=price_low_high";
		 axios.get(reqUrl)
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

	nextPage  = () => {
		this.props.dispatch(goToNextPage(this.props.currentPage));
		this.fetchWines();
	}

	goToPreviousPage = () => {
		this.props.dispatch(goToPreviousPage(this.props.currentPage));
		this.fetchWines();
	}

	
	
	render(){
	  const {wineRendered} = this.props;

      let loadWines;
      if(this.state.wines != null){
        loadWines = this.state.wines.wines.map((wine, key) => (
              <Card {...wine} key={key}/>
        ));
        console.log(this.state.wines);
      }

      let nextButton;

      if(this.state.wineRendered){
      		nextButton =  ( 
      			<Button color="primary" variant="contained"  onClick={() => this.nextPage()}>Next</Button>
  			)
  	  }

  	  let previousButton ;

  	  if(this.state.wineRendered){
  	  	if(this.props.currentPage !== 1){
  	  		previousButton = (
  	  		<Button color="primary" variant="contained"  onClick={() => this.goToPreviousPage()}>Back</Button>
  			)
  	  	}
  	  }

  	  let loader;

      if(!this.state.wineRendered && this.state.clickedGetWinesButton){
        loader = (
          <Loader />
        )
      }

      let loadWinesButton;

      if(this.state.wines === null){
      	loadWinesButton = (
      		<Button variant="contained" color="primary" onClick={() => this.fetchWines()}>
	              Load Wines
	         </Button>
      	)
      }


		return (
			<div data-test='winesComponent'>

				{loadWinesButton}
				 
		         <div style={{margin: 'o auto' , padding: '10px'}}>
		         	{loader}
		         </div>
		         
				 <Grid container spacing={3}>
				 	{loadWines}
			      </Grid>
			      <div className="moreWines">
			      	 {previousButton} {nextButton}
			      </div>
				 
			</div>
			

		)
	}
	
}

const mapStateToProps = (state) => {
  return {
    wines: state.winesReducer.newWines,
    currentPage:state.winesReducer.currentPage
  }
}

export default connect(mapStateToProps)(Wines);