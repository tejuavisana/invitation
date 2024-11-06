import React from 'react';
//import logoimg from '../images/logo-white.png';
import bibahlogo from '../images/a123.jpg';
const Header = () => {
		return (
			<header>

				<div className="container">

					<a href="logo.jpg" className="logo" ><img src={bibahlogo} alt="Logo" /></a>

				</div>
			</header>
		);
}

export default Header;