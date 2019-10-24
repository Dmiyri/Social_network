import React, {Component} from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData} from "../../Redux/auth-reducer";
import {authAPI, usersAPI} from "../../api/api";

class HeaderContainer extends Component {

	componentDidMount() {
		this.props.getAuthUserData()
	}

	render() {
		return (
			<Header {...this.props}/>
		)
	}
}

const mapStateToProps = (state) => ({
		isAuth: state.auth.isAuth,
		login: state.auth.login,
	}
)
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
