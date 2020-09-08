import {combineReducers, createStore} from "redux";
import messager_reducer from "./messagereducer";
import profilepage_reducer from "./profilepagereducer";



let reducers = combineReducers({
    Messager : messager_reducer,
    ProfilePage : profilepage_reducer
});


let store = createStore(reducers);

export default store;