import React from 'react';
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
let state = props.store.getState();

	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	}

	let onPostChange = (text) => {
		props.store.dispatch(updatePostActionCreator(text));
	}
	return 	(
	<MyPosts updateNewPost={onPostChange}
			 addPost={addPost}
			 posts={state.profilePage.posts}
			 newPostText={state.profilePage.newPostText}/>
	)
}
export default MyPostsContainer;
