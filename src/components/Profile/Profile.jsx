import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./My posts/MyPosts";

const Profile = () => {
	return (
		<div  className={s.content}>
			<div><img
				src='https://media.istockphoto.com/photos/abstract-geometric-landscape-picture-id832632796?k=6&m=832632796&s=612x612&w=0&h=fA_-At_kccr38c3MTh_029UbGGpkHSVf-hCULZM3YDw='/>
			</div>
			<div>
				ava+dicription
			</div>
			<MyPosts/>
		</div>

	)
}
export default Profile;
