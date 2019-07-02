import React , {Component} from 'react';
import './styles.scss';
import Logo from '../../logo.svg';

class  Header extends Component {
	render(){
		return (
			<header  data-test="headerComponent">
				<div className="wrap">
					<img data-test="logoImg" src={Logo} height="50px" /> 
				</div>
			</header>
		)
	}
}

export default Header;