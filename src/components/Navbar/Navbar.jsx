import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Users from "../Users/Users.jsx";

const Navbar = (props) => {

	return (
		<div className={s.navs}>
		<nav className={s.nav}>
			< div className={s.item}>
				<NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
			</div>
			<div className={`${s.item} ${s.active}`}>
				<NavLink to='/dialogs' activeClassName={s.activeLink}>Message</NavLink>
			</div>
			<div className={`${s.item} ${s.active}`}>
				<NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
			</div>
			<div className={s.item}>
				<NavLink>News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink>Music</NavLink>
			</div>
			<div className={s.item}>
				<NavLink>Settings</NavLink>
			</div>
		</nav>

		</div>
	)
}
export default Navbar;
