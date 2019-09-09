import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				<Post message='How are you' like={10}/>
				<Post message="It's my project" like={15}/>
				<Post message='How ' like={7}/>
				<Post message='are' like={12}/>
				<Post message='you' like={5}/>
				<Post message='yo' like={1}/>
			</div>
		</div>


	)
}
export default MyPosts;
