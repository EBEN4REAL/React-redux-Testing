import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';
import Logo from '../../logo.svg';
import './styles.scss';

class Navbar extends React.Component {

	render(){
		return (
			<div className="navbar">
				<div className="logo">
					<img src={Logo}  className="logo-img"   />
				</div>
				<div className="menu-links">
					<ul>
						<li><a>Home</a></li>
						<li><a>Wines Producer</a></li>
					</ul>
				</div>
				
			</div>
		)
	}
} 

export default Navbar;