import React from 'react';
import Header from "./components/Header/Header";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = (props) => {

	return (
		<div className='app-wrapper'>
				<Header/>
				<Navbar state={props.state.sidebarPage}/>
				<div className='app-wrapper-content'>
					<Route path='/profile' render={()=><Profile store={props.store}/>}/>
					<Route path='/dialogs' render={()=><DialogsContainer store={props.store}/>}/>
				</div>
			</div>
	);
}
export default App;
