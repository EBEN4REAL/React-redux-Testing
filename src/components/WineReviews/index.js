import React from 'react';
import ListItem from '../ListItem';
import {connect} from 'react-redux';
import "./styles.scss";

class WineReviews extends React.Component {

	render(){
		console.log(this.props.wines);
		return (
			<div>
				<h3 style={{textAlign: 'center'}}>some Reviews about some wines</h3>
				<hr className="bottom-line" />
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