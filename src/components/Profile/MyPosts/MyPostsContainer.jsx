import React from 'react';
import Post from "./Post/Post";
import {addPostAction, refreshposttext} from "../../../Redux/profilepagereducer";
import MyPosts from "./MyPosts";




function MyPostsContainer(props) {

    let state = props.store.getState();


    let refreshpost = (e) =>{
    let text = e.target.value;
    props.store.dispatch(refreshposttext(text));
    }

    let addPost = () => {
        props.store.dispatch(addPostAction());
    }

    return (
        <MyPosts AddingPost={addPost} RefreshingPostText={refreshpost} newPostbody = {state.ProfilePage.posttext} PostElements = {state.ProfilePage.PostData}   />
    );


}


export default MyPostsContainer;