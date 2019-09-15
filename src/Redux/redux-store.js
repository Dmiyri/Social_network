import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let redusers = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	sidebarPage: sidebarReducer
}
)
let store = createStore(redusers);


export default store;