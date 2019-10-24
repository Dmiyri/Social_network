import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../Redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2
		}
		this.props.getUserProfile(userId)
		this.props.getStatus(userId)
	}


	render() {

		return (
			<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
		)
	}
}

/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer);*/

let mapStateToProps = (state) => ({
		profile: state.profilePage.profile,
		status: state.profilePage.status
	});

/*let withUrlDataContainerComponent = withRouter(ProfileContainer);*/
/*
export default connect(mapStateToProps, {getUserProfile} )(withRouter(AuthRedirectComponent));*/

export default compose(
	connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
	withRouter,
	//withAuthRedirect
)(ProfileContainer);
