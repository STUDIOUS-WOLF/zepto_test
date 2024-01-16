import React from "react";
//import yourImage from "../assets/bunch-fresh-carrots-weathered-old-cutting-board-with-deep-cuts-beautiful-wooden-brown-table-top-view.jpg";
import crossIcon from "../assets/cross.png";

const YourComponent = (props) => {
  const { id, label, image, onRemove } = props;
  console.log(id);
  console.log(label);
  return (
    <div
      className="max-w-40 h-7 bg-gray-300 rounded-full flex items-center justify-between"
      key={id}
    >
      <div className="rounded-full overflow-hidden">
        <img
          className="w-6 h-6 object-cover rounded-full"
          src={image}
          alt="Icon"
        />
      </div>
      <span className="text-black ml-2">{label}</span>
      <img className="w-5 h-5" src={crossIcon} onClick={onRemove} />
    </div>
  );
};

export default YourComponent;
