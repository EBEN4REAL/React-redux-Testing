import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import {NavLink, Link} from 'react-router-dom';
import Logo from '../../logo.svg';
import './styles.scss';
import Backdrop from '../backdrop';

class Navbar extends React.Component {
	state = {
		openBackdrop: false
	}

	openBackdropHandler = () => {
		this.setState({
			openBackdrop: !this.state.openBackdrop
		})
	}

	render(){
		return (
			<div className="navbar">
				<div className="logo">
					<div className="hamburger" onClick={() => this.openBackdropHandler()}>
						<div className="hamburger-menu"></div>
						<div className="hamburger-menu"></div>
						<div className="hamburger-menu"></div>
					</div>
				</div>
				<div className="menu-links">
					<ul>
						<Link to="/" style={{marginRight: '20px', textDecoration: 'none'}}>Home</Link>
						<Link to="/wine_reviews" style={{marginRight: '20px', textDecoration: 'none'}}>Wine producers</Link>
					</ul>
				</div>
				{this.state.openBackdrop ? <Backdrop openBackdropHandler={this.openBackdropHandler}  /> : null}
				
			</div>
		)
	}
} 

export default Navbar;