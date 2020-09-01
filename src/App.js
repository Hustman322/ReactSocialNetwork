import React from 'react';
import './123.png';
import './App.css';
import Header from "./components/Header/Header";
import Navmenu from "./components/NavMenu/Navmenu";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";




function App(props) {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navmenu/>

            <div className="app-wrapper-content">
                <Route path="/Profile" render={() => <Profile ProfilePage={props.state.ProfilePage} Dispatch={props.Dispatch}/>} />
                <Route path="/Dialogs" render={() => <Dialogs Messager={props.state.Messager} Dispatch={props.Dispatch}/>}/>
            </div>
        </div>

    );
}


export default App;
