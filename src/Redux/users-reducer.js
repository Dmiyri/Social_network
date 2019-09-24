const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';

let initialState = {
	users: [
		/*{
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
		},*/
	],

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
			return {...state, users: [...state.users, ...action.users]}
		default: return state;
	}
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SETUSERS, users});

export default usersReducer;