import React from "react";

const YoutubeItem = (props) => {
  return (
    <div className={`youtube-item ${props.className}`}>
      <div className="youtube-image">
        <img src={props.img} alt="" />
      </div>

      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />

        <div className="youtube-info">
          <h3 className="youtube-title">
            {props.title || "Hoc reactjs cung Evondev"}
          </h3>
          <h4 className="youtube-author">
            {" "}
            {props.author || "nguyen xuan linh"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
