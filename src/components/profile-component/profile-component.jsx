//vendors
import React from 'react';

//style
import './profile-component.scss';

export const ProfileComponent = (props) => {
  const { profile } = props;

  return (
    <div className="profile">
      <a href="#">
        <img
          src={profile?.avatar}
          alt="Author profile picture"
          width="50"
          height="50"
        />
      </a>
      <div>
        <h3>
          <a href="#">@{profile?.handle}</a>
          <small>{profile?.displayName}</small>
        </h3>
        <p dangerouslySetInnerHTML={{ __html: profile.bio }}></p>
        <div className="social-links">
          <a href={`https://twitter.com/${profile?.twitter}`} target="_blank">
            <img
              src="https://hackernoon.com/social-icons/twitter-new.png"
              alt="Twitter social icon"
              width="20"
              height="20"
            />
          </a>
          <a href={`https://github.com/${profile?.github}`} target="_blank">
            <img
              src="https://hackernoon.com/social-icons/github-new.png"
              alt="github social icon"
              width="20"
              height="20"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
