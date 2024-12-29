import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category, showDetails, setShowIndex }) => {
  const handleAccordion = () => {
    setShowIndex();
  };

  return (
    <>
      <div
        onClick={handleAccordion}
        className=" p-2 my-4 mx-auto w-6/12 shadow-lg border border-solid border-gray-400 rounded-lg bg-orange-100 hover:bg-orange-500"
      >
        <div className="cursor-pointer flex justify-between font-semibold py-1 text-lg">
          <span>
            {category.title} ({category.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        <div>{showDetails && <ItemList items={category.itemCards} />}</div>
      </div>
    </>
  );
};
export default RestaurantCategory;
