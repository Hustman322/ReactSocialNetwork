import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostAction, refreshposttext} from "../../../Redux/profilepagereducer";




function MyPosts(props) {



    let PostElements = props.PostData.map(el => <Post PostData={props.PostData} Dispatch={props.Dispatch} message={el.message} likes={el.likes} id={el.id}/>);

    let PostMessage = React.createRef();

    let newPostbody = props.posttext;

    let refreshpost = (e) =>{
    let text = e.target.value;
    props.Dispatch(refreshposttext(text));
    }

    let addPost = () => {

        props.Dispatch(addPostAction());

    }

    return (

      <div>
          <div className={s.Myposts} >
          <p>My Posts</p>
          </div>
    <div className={s.Newpost}>
        <textarea value = {newPostbody} onChange={refreshpost} ref={PostMessage} placeholder="Type something new "  rows="4"></textarea>
        <button type="button" onClick ={ addPost }>Send</button>
    </div>
          {PostElements}
      </div>
    );


}


export default MyPosts;