//vendors
import React from 'react';

//styles
import './injected-html.scss';

export const InjectedHTML = (props) => (
  <div
    className="injected-html"
    dangerouslySetInnerHTML={{ __html: props.markup }}
  ></div>
);
