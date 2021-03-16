import React from 'react';

export const InjectedHTML = (props) => (
  <div dangerouslySetInnerHTML={{ __html: props.markup }}></div>
);
