import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {refreshmestext, sendmessage} from "../../Redux/messagereducer";



function Dialogs(props) {



    let DialogElements = props.DialogElements.map(el => <DialogItem name={el.name} surname={el.surname} id={el.id}/>);

    let MessageElements = props.MessageElements.map(el => <MessageItem message={el.message} id={el.id}/>);




    return (
        <div className={s.dialogspage}>
            <div className={s.dialogs}>
                {DialogElements}
            </div>
            <div className={s.messages}>
                {MessageElements}
                <div className={s.sending}>
                <textarea value={props.newMessagebody} onChange={props.refreshmessage} placeholder='Add Text Here'></textarea>
                    <button onClick={props.send}>-></button>
                </div>
            </div>
        </div>

    )

}

export default Dialogs;