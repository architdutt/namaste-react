import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useRestaurantsMenu } from "../utils/useRestaurantsMenu";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const resInfo = useRestaurantsMenu(restaurantId);
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo || resInfo === null) return <Shimmer />;

  const menuItems =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const { name, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[2]?.card.card.info;

  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-5">{name}</h1>
      <h2 className="text-center font-bold text-xl">
        Cost for two: {costForTwoMessage}
      </h2>
      <h3 className="text-center font-bold text-xl">
        Cuisines: {cuisines.join(", ")}
      </h3>

      <div>{menuItems === undefined && <p>No menu items found.</p>}</div>

      <ul>
        {categories?.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            category={category.card.card}
            showDetails={index === showIndex ?? true}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
