import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
return {
	dialogsPage:state.dialogsPage
}
}
let mapDispachToProps=(dispatch)=>{
	return {
		updateNewMessageBody:(body)=>{dispatch(updateNewMessageBodyCreator(body))},
			sendMessage: ()=>dispatch(sendMessageCreator())
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispachToProps)(Dialogs);

export default DialogsContainer;
