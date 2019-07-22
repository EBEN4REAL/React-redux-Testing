import React from 'react';
import './styles.scss';
import {configParams} from '../../config';

class UsersWineReviews extends React.Component {

	render(){
		

		let showPics;

		let imgUrl;

		console.log(this.props);

		if(this.props.producer.media.length > 0){

			imgUrl = configParams.cloudinaryUrl + "/" + this.props.producer.media[0].public_id;

			showPics = () => (
				<img src={imgUrl} alt="John" style={{width: '100%'}}/>
			)
		}
		if(this.props.producer.media.length === 0){
			 showPics = () => (
				<div style={{textAlign: 'center'}}>No picture for this image!</div>
			)
		}
		

		

		return (

			<div className="card">

			  {showPics()}
			  <h1>{this.props.producer.name}</h1>
			  <p className="title" style={{padding: "20px"}}>{this.props.producer.about}</p>
			  <p>Harvard University</p>
			  <p><button className="reviewButton">Contact</button></p>

			</div>
		)
	}
}
export default UsersWineReviews;