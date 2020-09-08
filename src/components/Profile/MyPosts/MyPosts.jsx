import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";





function MyPosts(props) {

    let PostElements = props.PostElements.map(el => <Post Dispatch={props.Dispatch} message={el.message} likes={el.likes} id={el.id}/>);

    let PostMessage = React.createRef();

    return (

      <div>
          <div className={s.Myposts} >
          <p>My Posts</p>
          </div>
    <div className={s.Newpost}>
        <textarea value = {props.newPostbody} onChange={props.RefreshingPostText} ref={PostMessage} placeholder="Type something new "  rows="4"></textarea>
        <button type="button" onClick ={props.AddingPost }>Send</button>
    </div>
          {PostElements}
      </div>
    );


}


export default MyPosts;