import {profileAPI, usersAPI} from "../api/api";

const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW_POST_TEXT';
const SET_USER_PROFILE='SET-USER-PROFILE';
const SET_STATUS='SET_STATUS';

let initialState = {
	posts: [
		{id: 1, message: 'How are you', like: 10,},
		{id: 2, message: 'How is you project', like: 15,},
		{id: 3, message: 'YUE', like: 7,},
		{id: 4, message: 'YO', like: 12,},
		{id: 5, message: "It's my project", like: 5,},
		{id: 6, message: 'What', like: 1,},
	],
	newPostText: 'ittttttt',
	profile: null,
	status: '',
}

const profileReducer =(state = initialState, action)=> {
	switch (action.type) {
		case addPost:{
			let newPost = {
				id: 5,
				message: state.newPostText,
				like: 0,
			};
			return{
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			};

		}
		case updateNewPostText:{
			return {
				...state,
				newPostText: action.newText
			};
		}
		case SET_USER_PROFILE:{
			return{
				...state,
				profile: action.profile
			}
		}
		case SET_STATUS:{
			return{
				...state,
				status: action.status
			}
		}
		default: return state;
	}
}

export let addPostActionCreator = () => ({type: addPost})

export let updatePostActionCreator = (text) => {
	return {type: updateNewPostText, newText: text}
};
export let setStatus = (status) => {
	return {type: SET_STATUS, status}
};
export let setUserProfile = (profile) => {
	return {type: SET_USER_PROFILE, profile}
};
export let getUserProfile = (userId)=>(dispatch) => {
	usersAPI.getProfile(userId).then(response => {
		dispatch(setUserProfile(response.data))
	});
};

export let getStatus = (userId)=>(dispatch) => {
	profileAPI.getStatus(userId).then(response => {
		dispatch(setStatus(response.data))
	});
};

export let updateStatus = (status)=>(dispatch) => {
	profileAPI.updateStatus(status).then(response =>
	{if (response.data.resultCode ===0) {
		dispatch(setStatus(status))
	}});
};
export default profileReducer;