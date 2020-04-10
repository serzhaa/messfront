import React from 'react';
import Prof from './Profile.css';

const Profile = () => {
  return (
    <main className="profile">
      <div className="head-elem">
        <img src="images/user_photo.jpg" alt="" className="profile__photo" />
        <div className="profile__info">
          <div className="status">
            online
          </div>
          <div className="profile__info__name">
            Vyacheslav Karelin
          </div>
          <div className="profile__photos">
            <span className="profile__photos__text">
              All photos
            </span>
            <div className="profile__photos__wrapper">
              <div className="profile__photos__item"></div>
              <div className="profile__photos__item"></div>
              <div className="profile__photos__item"></div>
              <div className="profile__photos__item"></div>
              <div className="profile__photos__item"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;