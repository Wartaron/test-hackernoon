//vendors
import React from 'react';
import { Link } from 'react-router-dom';

//assets
import postImg from '../../assets/img/post-card-image.jpeg';

//style
import './initial.scss';

export const InitialComponent = () => {
  return (
    <article className="post-card">
      <div className="post-card__title">
        <h2>
          <Link to="/step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd">
            Step by Step Guide to Create 3 Different Types of Loading Screens in
            React
          </Link>
        </h2>
      </div>
      <div className="post-card__image">
        <Link to="/step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd">
          <img src={postImg} width="600" height="350"></img>
        </Link>
      </div>
    </article>
  );
};

export default InitialComponent;
