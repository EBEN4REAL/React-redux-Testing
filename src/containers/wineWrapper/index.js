
import React from 'react';
import Wines from '../../components/WinesComponent';
import Headline from '../../components/Headline';
import {withRouter} from 'react-router';

class WinesWrapper extends React.Component {

	render(){
		return (
			<div>
				<section className="main">
		            <Headline header="Wines"  desc="Click the button to render wines!"/>
		            <div style={{marginTop: '50px', marginBottom: '50px'}}>
		              <Wines {...this.props} />
		            </div>
	          	</section>
			</div>
		)
	}
}

export default withRouter(WinesWrapper);