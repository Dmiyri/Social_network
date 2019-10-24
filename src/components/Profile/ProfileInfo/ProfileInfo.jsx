import React from 'react';
import s from './ProfileInfo.module.css'
import Prelouder from "../../common/Prelouder/prelouder";
import ProfileSatus from './ProfileSatus'

const ProfileInfo = (props) => {

	if (!props.profile){
		return <Prelouder/>
	}

	return (
		<div>
			<div>
				<img src='https://media.istockphoto.com/photos/abstract-geometric-landscape-picture-id832632796?k=6&m=832632796&s=612x612&w=0&h=fA_-At_kccr38c3MTh_029UbGGpkHSVf-hCULZM3YDw='/>
			</div>
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large}/>
				<ProfileSatus status = {props.status} updateStatus={props.updateStatus}/>
			</div>
		</div>

	)
}
export default ProfileInfo;
