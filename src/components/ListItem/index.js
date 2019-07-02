import React , {Component} from 'react';
import propTypes from 'prop-types';

class ListItem extends Component{

	render(){

		const {title, desc} = this.props;

		if(!title) {
			return null;
		}

		return (
			<div data-test="ListItem">
				<h2 data-test="componentTitle">{title}</h2>
				<div data-test="componentDesc">
					{desc}
				</div>
			</div>
		)
	}
}

ListItem.propTypes = {
	title: propTypes.string,
	desc: propTypes.string
}

export default ListItem;