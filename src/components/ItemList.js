import React from "react";
import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  console.log("items", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="font-bold py-2">
              <span>{item.card.info.name} </span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="font-normal text-xs">
                {item.card.info.description}
              </p>
            </div>
          </div>

          <div className="w-3/12 p-2">
            <div className="absolute ">
              <button className="cursor-pointer  bg-slate-600 p-2 mx-0  rounded-lg text-amber-100">
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
