import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = (props) => {
	return (
		<div>
			<CircularProgress disableShrink style={{textaLIGN: 'center'}} />
		</div>
	)
}

export default Loader;