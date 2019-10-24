import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Login from "../Login/Login";
import {Redirect} from "react-router-dom";



const Dialogs = (props) => {
	let state = props.dialogsPage;
	let dialogsElements = state.dialogs.map(e => <DialogItem id={e.id} key={e.id} name={e.name}/>)
	let messagesElements = state.messages.map(e => <Message id={e.id} key={e.id} message={e.message}/>)
	let newMessageBody = state.newMessageBody;


	let onSendMessageClick = () => {
		props.sendMessage();
	}

	let onNewMessageChange = (e) => {
		let body = e.currentTarget.value;
		props.updateNewMessageBody(body);
	}

	if (!props.isAuth) return <Redirect to={'/login'}/>

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
				<div>
					<div>
						<textarea placeholder='Enter your message'
								  value={newMessageBody}
								  onChange={onNewMessageChange}/>
					</div>
					<div>
						<button onClick={onSendMessageClick}>Add post</button>
					</div>
				</div>
			</div>

		</div>
	)
}
export default Dialogs;
