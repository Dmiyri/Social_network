import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={s.header} >
			<img src='https://st2.depositphotos.com/3867453/7605/v/950/depositphotos_76055207-stock-illustration-letter-s-logo-icon-design.jpg'/>
		<div className={s.loginBlock}>
			{props.isAuth ? props.login
			:<NavLink to={'/login'}>Login</NavLink>}
		</div>
		</header>
	)
}
export default Header;
