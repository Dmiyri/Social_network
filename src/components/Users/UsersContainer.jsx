import React from 'react';
import {connect} from "react-redux";
import {
	follow,
	setCurrentPages,
	setUsers,
	setUsersTotalCount,
	toggleIsFetching,
	unfollow
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Prelouder from "../common/Prelouder/prelouder";

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
																	&count=${this.props.pageSize}`,
			{withCredentials:true,
				headers: {'API-KEY':'f2e9018e-d208-488e-be78-1225c31cee27'}})
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items)
				this.props.setUsersTotalCount(response.data.totalCount)
			});
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPages(pageNumber);
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
																	&count=${this.props.pageSize}`,
			{withCredentials:true,
				headers: {'API-KEY':'f2e9018e-d208-488e-be78-1225c31cee27'}})
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items)
			});
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
	}
}
/*const mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPagesAC(pageNumber))
		},
		setTotalUserCount: (totalCount) => {
			dispatch(setUsersTotalCountAC(totalCount))
		},
		toggleIsFetching: (isFetching)=>{
			dispatch(toggleIsFetchingAC(isFetching))
		}

	}
}*/


export default connect(mapStateToProps, {
		follow,
		unfollow,
		setUsers,
		setCurrentPages,
		setUsersTotalCount,
		toggleIsFetching
	}
)(UsersContainer);
