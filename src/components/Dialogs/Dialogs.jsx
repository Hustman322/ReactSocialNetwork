import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {refreshmestext, sendmessage} from "../../Redux/messagereducer";



function Dialogs(props) {



    let DialogElements = props.Messager.DialogData.map(el => <DialogItem name={el.name} surname={el.surname} id={el.id}/>);

    let MessageElements = props.Messager.MessageData.map(el => <MessageItem message={el.message} id={el.id}/>);

    let newMessagebody = props.Messager.messagetext;

    let refreshmessage= (e) => {
    let text = e.target.value;
    props.Dispatch(refreshmestext(text));
    }

    let send = () => {

        props.Dispatch(sendmessage())

    }

    return (
        <div className={s.dialogspage}>
            <div className={s.dialogs}>
                {DialogElements}
            </div>
            <div className={s.messages}>
                {MessageElements}
                <div className={s.sending}>
                <textarea value={newMessagebody} onChange={refreshmessage} placeholder='Add Text Here'></textarea>
                    <button onClick={send}>-></button>
                </div>
            </div>
        </div>

    )

}

export default Dialogs;