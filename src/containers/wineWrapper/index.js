
import React from 'react';
import Wines from '../../components/WinesComponent';
import Headline from '../../components/Headline';

class WinesWrapper extends React.Component {

	render(){
		return (
			<div>
				<section className="main">
		            <Headline header="Wines"  desc="Click the button to render wines!"/>
		            <div style={{marginTop: '50px', marginBottom: '50px'}}>
		              <Wines />
		            </div>
	          	</section>
			</div>
		)
	}
}

export default WinesWrapper;