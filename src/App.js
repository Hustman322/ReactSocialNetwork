import React from 'react';
import './123.png';
import './App.css';
import Header from "./components/Header/Header";
import Navmenu from "./components/NavMenu/Navmenu";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";




function App(props) {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navmenu/>

            <div className="app-wrapper-content">
                <Route path="/Profile" render={() => <Profile store={props.store}/>} />
                <Route path="/Dialogs" render={() => <DialogsContainer store={props.store}/>}/>
            </div>
        </div>

    );
}


export default App;
