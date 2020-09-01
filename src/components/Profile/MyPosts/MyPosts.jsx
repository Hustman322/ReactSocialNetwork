import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostAction} from "../../../Redux/profilepage";



function MyPosts(props) {



    let PostElements = props.PostData.map(el => <Post PostData={props.PostData} Dispatch={props.Dispatch} message={el.message} likes={el.likes} id={el.id}/>);

    let PostMessage = React.createRef();

    let addPost = () => {
        if(PostMessage.current.value!==0){
        let text = PostMessage.current.value;
        props.Dispatch(addPostAction(text));
        PostMessage.current.value='';
            }
    }

    return (

      <div>
          <div className={s.Myposts} >
          <p>My Posts</p>
          </div>
    <div className={s.Newpost}>
        <textarea ref={PostMessage} placeholder="Type something new "  rows="4"></textarea>
        <button type="button" onClick ={ addPost }>Send</button>
    </div>
          {PostElements}
      </div>
    );


}


export default MyPosts;