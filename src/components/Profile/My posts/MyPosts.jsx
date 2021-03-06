import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
	let newPostElement = React.createRef();
	let postsElements = props.profilePage.posts.map(e => <Post key = {e.id} id={e.id} message={e.message} like={e.like}/>)

	let onAddPost = () => {
		props.addPost();
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPost(text);
	}
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange}
							  ref={newPostElement}
							  value={props.newPostText}/>
				</div>
				<div>
					<button onClick={onAddPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>


	)
}
export default MyPosts;
