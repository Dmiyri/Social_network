import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
		</div>
	)
}


const Message = (props) => {
	return (
		<div className="message">{props.message}</div>
	)
}


const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name='Dimych' id={1}/>
					<DialogItem name='Andrey' id={2}/>
						<DialogItem name='Sveta' id={3}/>
							<DialogItem name='Valera' id={4}/>
								<DialogItem name='Petr' id={5}/>
									<DialogItem name='Valentina' id={6}/>

			</div>
			<div className={s.messages}>
				<Message message='Hi'/>
				<Message message='How is you project'/>
				<Message message='YUE'/>
				<Message message='YO'/>
				<Message message='Why'/>
				<Message message='What'/>
			</div>
		</div>
)
}
export default Dialogs;
