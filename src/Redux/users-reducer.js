import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROCESSING = 'TOGGLE-IS-FOLLOWING-PROCESSING';

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 20,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: true}
					}
					return u;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: false}
					}
					return u;
				})
			}
		case SETUSERS:
			return {...state, users: action.users}
		case SET_CURRENT_PAGE:
			return {...state, currentPage: action.currentPage}
		case SET_USERS_TOTAL_COUNT:
			return {...state, totalUsersCount: action.totalCount}
		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching}
		case TOGGLE_IS_FOLLOWING_PROCESSING:
			return {
				...state,
				followingInProgress: action.isFetching
					?[...state.followingInProgress, action.userId]
						:state.followingInProgress.filter(id => id != action.userId)
			}
		default:
			return state;
	}
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SETUSERS, users});
export const setCurrentPages = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching)=>({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId)=>({type:TOGGLE_IS_FOLLOWING_PROCESSING , isFetching, userId});

export const getUsersTC =(currentPage, pageSize)=> (dispatch)=>{
	dispatch(toggleIsFetching(true));
	usersAPI.getUsers(currentPage, pageSize).then(data => {
		dispatch(toggleIsFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setUsersTotalCount(data.totalCount));
	});
}

export const follow =(userId)=> (dispatch)=>{
	dispatch(toggleFollowingProgress(true, userId));
	usersAPI.follow(userId)
		.then(response => {
			if ( response.data.resultCode ===0){
				dispatch(followSuccess(userId))
			}
			dispatch(toggleFollowingProgress(false, userId));
	});
}
export const unfollow =(userId)=> (dispatch)=>{
	dispatch(toggleFollowingProgress(true, userId));
	usersAPI.unfollow(userId)
		.then(response => {
			if ( response.data.resultCode ===0){
				dispatch(unfollowSuccess(userId))
			}
			dispatch(toggleFollowingProgress(false, userId));
		});
}


export default usersReducer;