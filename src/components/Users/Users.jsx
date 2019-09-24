import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
if (props.users.length ===0){
	props.setUsers([
		{
		id: 1,
		photoUrl: 'https://yt3.ggpht.com/a/AGF-l7_k9w9W2vE7M5xuxPSEnDbzDB1nJHZNl3lqpA=s900-c-k-c0xffffffff-no-rj-mo',
		followed: false,
		fullName: 'Dmitri',
		status: 'I am a boss',
		location: {city: 'Minsk', country: 'Belarus'}
	},
	{
		id: 2,
		photoUrl: 'https://yt3.ggpht.com/a/AGF-l7_k9w9W2vE7M5xuxPSEnDbzDB1nJHZNl3lqpA=s900-c-k-c0xffffffff-no-rj-mo',
		followed: true,
		fullName: 'Sasha',
		status: 'I am a boss',
		location: {city: 'Moscow', country: 'Russia'}
	},
	{
		id: 3,
		photoUrl: 'https://yt3.ggpht.com/a/AGF-l7_k9w9W2vE7M5xuxPSEnDbzDB1nJHZNl3lqpA=s900-c-k-c0xffffffff-no-rj-mo',
		followed: false,
		fullName: 'Alex',
		status: 'I am a boss',
		location: {city: 'Kiev', country: 'Ukraine'}
	},
	])
}

	return (
		<div>
			{props.users.map(u=> <div key={u.id}>
				<span>
					<div>
						<img src={u.photoUrl} className={s.usersFoto}/>
					</div>
					<div>
						{u.followed
							? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
							: <button onClick={()=>{props.follow(u.id)}}>Follow</button>}

					</div>
				</span>
				<span>
					<span>
						<div>{u.fullName}</div>
						<div>{u.status}</div>
					</span>
					<span>
						<div>{u.location.country}</div>
						<div>{u.location.city}</div>
					</span>
				</span>
			</div>)}
		</div>
	)

}
export default Users;
