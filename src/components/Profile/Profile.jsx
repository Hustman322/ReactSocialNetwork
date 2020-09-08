import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";



function Profile(props) {
    return (
        <div>
        <ProfileInfo />
            <MyPosts profiletext={props.ProfilePage.posttext} PostData={props.ProfilePage.PostData} Dispatch={props.Dispatch} />
        </div>


    );


}


export default Profile;