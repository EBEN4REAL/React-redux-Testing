import React from 'react';
import ListItem from '../ListItem';
import {connect} from 'react-redux';
import "./styles.scss";
import {fetchWines} from '../../store/actions';
import UserReviews from '../UsersWinesReviews'
import Slider from '../Slider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
				<Col>
					<UserReviews key={index} {...wine} />
				</Col>
			));

		}
		console.log(this.state.wines);

		return (

			<div style={{margin: '0 auto', width: '95%', paddingTop: '50px'}}>
				<Slider />
				<h3 style={{textAlign: 'center', marginTop: '30px'}}>Wine producers</h3>
				<hr className="bottom-line" />
				<div style={{marginTop:  '70px'}}>
					<Row>
					    {renderWineReviews}
				    </Row>
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