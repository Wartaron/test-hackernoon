//vendors
import React from 'react';

//styles
import './emojis-component.scss';

export const EmojisComponent = (props) => {
  const { reactions } = props;

  return (
    <div className="reactions">
      <div>
        <label>{reactions?.total}</label>
        <div className="emojis">
          <div className="emojis__container">
            <span>{reactions?.storyReactions?.heart}</span>
            <img src="https://hackernoon.com/emojis/heart.png" />
          </div>
          <div className="emojis__container">
            <span>{reactions?.storyReactions?.light}</span>
            <img src="https://hackernoon.com/emojis/light.png" />
          </div>
          <div className="emojis__container">
            <span>{reactions?.storyReactions?.boat}</span>
            <img src="https://hackernoon.com/emojis/boat.png" />
          </div>
          <div className="emojis__container">
            <span>{reactions?.storyReactions?.money}</span>
            <img src="https://hackernoon.com/emojis/money.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
