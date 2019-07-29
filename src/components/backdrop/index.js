import React from 'react';
import './styles.scss';

const Backdrop = (props) => {
	return (
		<div className="backdrop">
			<div className="backdrop-menu">
				<div className="backdrop-close" onClick={props.openBackdropHandler}>X</div>
				<ul>
					<li><a>Home</a></li>
					<li><a>Wine Producers</a></li>
				</ul>
			</div>
		</div>
	)
}

export default Backdrop;