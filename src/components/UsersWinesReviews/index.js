import React from 'react';
import './styles.scss';
import {configParams} from '../../config';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class UsersWineReviews extends React.Component {

	render(){
		

		let showPics;

		let imgUrl;

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

		let aboutText  = String(this.props.producer.about);

		let shortenedText = aboutText.slice(0, 60);

		return (

			<Container className="card">
			  {showPics()}
			  <h5>{this.props.producer.name}</h5>
			  <p className="title" style={{padding: "20px"}}>{ shortenedText}</p>
			  <p>Harvard University</p>
			  <p><button className="reviewButton">Contact</button></p>
			</Container>
		)
	}
}
export default UsersWineReviews;