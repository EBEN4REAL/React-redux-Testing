import React from 'react';
import propTypes from 'prop-types';

class HeadLine extends React.Component {

	render(){
		const  {header , desc} = this.props;

		if(!header){
			return null;
		}

		return (
			<div data-test="HeadLineComponent">
				<h1 data-test="header">{header}</h1>
				<p data-test="desc"> {desc} </p>
			</div>
		)
	}
}

HeadLine.propTypes = {
	header: propTypes.string,
	desc: propTypes.string,
	tempArr: propTypes.arrayOf(propTypes.shape({
		name: propTypes.string,
		age: propTypes.age,
		isTall: propTypes.bool
	}))
}

export default HeadLine;