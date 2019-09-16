const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW_POST_TEXT';

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
		default: return state;
	}
}

export let addPostActionCreator = () => ({type: addPost})

export let updatePostActionCreator = (text) => {
	return {type: updateNewPostText, newText: text}
};
export default profileReducer;