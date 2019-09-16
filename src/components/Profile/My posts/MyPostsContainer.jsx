import React from 'react';
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps=(state)=>{
	return {
		profilePage: state.profilePage,
		newPostText: state.profilePage.newPostText,
	}
}
let mapDispachToProps=(dispatch)=>{

	return {
		updateNewPost: (text)=>{dispatch(updatePostActionCreator(text))},
		addPost:()=>{dispatch(addPostActionCreator())}
	}
}
const MyPostContainer = connect(mapStateToProps, mapDispachToProps)(MyPosts)

export default MyPostContainer;
