import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReduser} from "redux-form";


let redusers = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	sidebarPage: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReduser,
}
)
let store = createStore(redusers, applyMiddleware(thunkMiddleware));
window.store = store;


export default store;