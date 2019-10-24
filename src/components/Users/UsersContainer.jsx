import React from 'react';
import {connect} from "react-redux";
import {
	follow,
	getUsersTC,
	setCurrentPages,
	toggleFollowingProgress,
	unfollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import Prelouder from "../common/Prelouder/prelouder";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsersTC(pageNumber, this.props.pageSize)
	}

	render() {
		return <>
			{this.props.isFetching ? <Prelouder/> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
				   pageSize={this.props.pageSize}
				   currentPage={this.props.currentPage}
				   onPageChanged={this.onPageChanged}
				   users={this.props.users}
				   unfollow={this.props.unfollow}
				   follow={this.props.follow}
				   followingInProgress={this.props.followingInProgress}
			/>
		</>
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}

/*let withRedirect = withAuthRedirect(UsersContainer);

export default connect(mapStateToProps, {
		follow,
		unfollow,
		setCurrentPages,
		toggleFollowingProgress,
	getUsersTC
	}
)(withRedirect);*/


export default compose (
	connect(mapStateToProps, {follow, unfollow, setCurrentPages, toggleFollowingProgress, getUsersTC}),
	withAuthRedirect
)(UsersContainer)
