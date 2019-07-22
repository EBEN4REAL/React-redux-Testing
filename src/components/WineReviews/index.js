import React from 'react';
import ListItem from '../ListItem';
import {connect} from 'react-redux';
import "./styles.scss";
import {fetchWines} from '../../store/actions';

class WineReviews extends React.Component {

	state = {
		wines: null
	}

	componentDidMount(){
		this.props.dispatch(fetchWines()).then(res => {
			console.log(res.payload);
			this.setState({wines: res.payload});
		})
	}

	render(){

		let renderWineReviews;

		if(this.state.wines !== null) {

			renderWineReviews = this.state.wines.wines.map((wine, index) => (
				<ListItem key={index} />
			));

		}
		console.log(this.state.wines);

		return (

			<div style={{margin: '0 auto', width: '95%', paddingTop: '50px'}}>
				<h3 style={{textAlign: 'center'}}>Reviews about some wines</h3>
				<hr className="bottom-line" />
				<div style={{marginTop:  '70px'}}>
					{renderWineReviews}
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
export default connect(mapStateToProps)(WineReviews);