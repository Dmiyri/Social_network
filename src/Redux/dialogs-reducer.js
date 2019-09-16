const sendMessage = 'SEND-MESSAGE';
const updateNewMessageBody = 'UPDATE-NEW_MESSAGE_BODY';

let initialState = {
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
}

const dialogsReducer =(state = initialState, action)=> {

	switch (action.type) {
		case updateNewMessageBody: {
			return  {
				...state,
				newMessageBody: action.body
			};
		}
		case sendMessage:{
			let body = state.newMessageBody;
			return {
				...state,
				newMessageBody:'',
				messages: [...state.messages, {id: 7, message: body}]
			};
		}
		default: return state;
	}

	return state;
}

export let sendMessageCreator = () => ({type: sendMessage})

export let updateNewMessageBodyCreator = (message) => {
	return {type: updateNewMessageBody, body: message}
};
export default dialogsReducer;