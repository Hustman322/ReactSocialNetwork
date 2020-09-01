import React from 'react';
import s from './ProfileInfo.module.css';


function ProfileInfo(){
    return(
        <div>
        <div>
            <img alt='bk' src='https://wallpaperplay.com/walls/full/9/e/b/60621.jpg' width='100%' height='200px'
                 id='bkimage'/>
        </div>
    <div className={s.PhotoDesc}>
        <div className={s.ProfPhoto}><img alt="ava" src="ava/ava.png"/></div>

        <div className={s.Description}>
            <h3>Roman Frais</h3>
            <p>Im noobick and suck everyday </p>
            <a href="vk.com">show more info</a>
        </div>
    </div>
        </div>
    );

}

export default ProfileInfo;