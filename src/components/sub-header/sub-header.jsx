//vendors
import React from 'react';

//styles
import './sub-header.scss';

export const SubHeader = () => {
  return (
    <div className="sub-header">
      <ul>
        <li>
          <a className="main" href="#">
            Read
          </a>
        </li>
        <li>
          <a href="#">Top Stories</a>
        </li>
        <li>
          <a href="#">Write</a>
        </li>
        <li>
          <a href="#">Listen</a>
        </li>
        <li>
          <a className="main" href="#">
            Learn
          </a>
        </li>
        <li>
          <a href="#">Advertise</a>
        </li>
        <li>
          <a className="main" href="#">
            About
          </a>
        </li>
        <li>
          <a className="main" href="#">
            Tech Companies
          </a>
        </li>
        <li>
          <a href="#">Carrers</a>
        </li>
        <li>
          <a href="#">Sloggins</a>
        </li>
      </ul>
    </div>
  );
};

export default SubHeader;
