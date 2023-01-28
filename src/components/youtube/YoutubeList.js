import React from "react";
import { youtubeData } from "../../Data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = () => {
  return (
    <div className="youtube-list">
      {youtubeData.map((item, index) => {
        let newclassName = "";
        if (index == 1) {
          newclassName = "abc";
        }
        return (
          <YoutubeItem
            key={item.id}
            avatar={item.avatar}
            img={item.image}
            title={item.title}
            author={
              item.author === "nguyen xuan linh"
                ? "nguyen xuan linh"
                : "nguyen van binh"
            }
            // className={index === 1 ? "abc" : ""}
            className={newclassName}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
