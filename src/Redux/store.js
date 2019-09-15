import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW_POST_TEXT';
const sendMessage = 'SEND-MESSAGE';
const updateNewMessageBody = 'UPDATE-NEW_MESSAGE_BODY';

let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'How are you', like: 10,},
				{id: 2, message: 'How is you project', like: 15,},
				{id: 3, message: 'YUE', like: 7,},
				{id: 4, message: 'YO', like: 12,},
				{id: 5, message: "It's my project", like: 5,},
				{id: 6, message: 'What', like: 1,},
			],
			newPostText: 'ittttttt'
		},
		dialogsPage: {
			dialogs: [
				{id: 1, name: 'Dimych',},
				{id: 2, name: 'Andrey',},
				{id: 3, name: 'Sveta',},
				{id: 4, name: 'Valera',},
				{id: 5, name: 'Petr',},
				{id: 6, name: 'Valentina',},
			],
			messages: [
				{id: 1, message: 'Hi',},
				{id: 2, message: 'How is you project',},
				{id: 3, message: 'YUE',},
				{id: 4, message: 'YO',},
				{id: 5, message: 'Why',},
				{id: 6, message: 'What',},
			],
			newMessageBody: 'hhh',
		},
		sidebarPage: {
			activeFriends: [
				{
					id: 1,
					logo: 'https://media.istockphoto.com/photos/abstract-geometric-landscape-picture-id832632796?k=6&m=832632796&s=612x612&w=0&h=fA_-At_kccr38c3MTh_029UbGGpkHSVf-hCULZM3YDw=',
					name: 'Dimych',
				},
				{
					id: 2,
					logo: 'https://media.istockphoto.com/photos/abstract-geometric-landscape-picture-id832632796?k=6&m=832632796&s=612x612&w=0&h=fA_-At_kccr38c3MTh_029UbGGpkHSVf-hCULZM3YDw=',
					name: 'Andrey',
				},
				{
					id: 3,
					logo: 'https://media.istockphoto.com/photos/abstract-geometric-landscape-picture-id832632796?k=6&m=832632796&s=612x612&w=0&h=fA_-At_kccr38c3MTh_029UbGGpkHSVf-hCULZM3YDw=',
					name: 'Sveta',
				},
			]
		}
	},
	_callSubscriber() {
		console.log('state was changed');
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
		this._callSubscriber(this._state);
}
}



export default store;