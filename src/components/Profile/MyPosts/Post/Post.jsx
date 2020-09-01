import React from 'react';
import s from './Post.module.css';


function Post(props) {
    return (

    <div className={s.post}>
        <a href="vk.com"><img alt='miniava' src='./ava/ava.png' /></a>
        <p>{props.message}</p>
        <button className={s.btn}>
            <i className="fa fa-heart" aria-hidden="true"></i> {props.likes}
        </button>
    </div>

    );


}


export default Post;