import s from "../Dialogs.module.css";
import React from "react";

function MessageItem(props) {

    return (
        <div className={s.message}><p>{props.message}</p></div>
    );

}

export default MessageItem;