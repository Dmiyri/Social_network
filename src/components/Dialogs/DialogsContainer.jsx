import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import Redirect from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps=(state)=>{
return {
	dialogsPage:state.dialogsPage,
}
}
let mapDispachToProps=(dispatch)=>{
	return {
		updateNewMessageBody:(body)=>{dispatch(updateNewMessageBodyCreator(body))},
			sendMessage: ()=>dispatch(sendMessageCreator())
	}
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispachToProps)(AuthRedirectComponent);

export default DialogsContainer;

/*
export default compose (
	connect(mapStateToProps, mapDispachToProps),
	withAuthRedirect
)(Dialogs);*/
