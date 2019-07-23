import React from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import wine5 from '../../img/wine5.jpg';
import wine3 from '../../img/wine3.jpg';
import wine2 from '../../img/wine2.jpg';

class Slider extends React.Component {

	render(){
		return (
			<div>
				<Carousel>
				 
				  <Carousel.Item>
				    <img
				      className="d-block w-100"
				      src={wine2}
				      alt="Third slide"
				    />

				    <Carousel.Caption>
				      <h3></h3>
				      <p></p>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img
				      className="d-block w-100"
				      src={wine3}
				      alt="Third slide"
				    />

				    <Carousel.Caption>
				      <h3></h3>
				      <p></p>
				    </Carousel.Caption>
				  </Carousel.Item>
				</Carousel>
			</div>
		)
	}
}

export default Slider;