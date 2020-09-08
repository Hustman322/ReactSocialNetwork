import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {refreshmestext, sendmessage} from "../../Redux/messagereducer";
import Dialogs from "./Dialogs";



function DialogsContainer(props) {
    let state = props.store.getState();


    let refreshmessage= (e) => {
    let text = e.target.value;
    props.store.dispatch(refreshmestext(text));
    }

    let send = () => {

        props.store.dispatch(sendmessage())

    }

    return (
      <Dialogs DialogElements={state.Messager.DialogData} MessageElements={state.Messager.MessageData}
      newMessagebody={state.Messager.messagetext} refreshmessage={refreshmessage} send={send}
      />

    );

}

export default DialogsContainer;