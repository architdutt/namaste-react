import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

import { useRestaurantsMenu } from "../utils/useRestaurantsMenu";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const resInfo = useRestaurantsMenu(restaurantId);

  // useEffect(() => {
  //   fetchRestaurantsMenu(restaurantId);
  // }, []);

  // const fetchRestaurantsMenu = async (restaurantId) => {
  //   const response = await fetch(RESTAURANT_INFO + restaurantId);
  //   const data = await response.json();
  //   console.log("Menu", data);
  //   setResInfo(data);
  // };

  console.log("resInfo", resInfo);

  if (!resInfo || resInfo === null) return <Shimmer />;

  const menuItems =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  console.log("menuItems", menuItems);

  const { name, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[2]?.card.card.info;

  return (
    <div>
      <h1>{name}</h1>
      <h2>Cost for two: {costForTwoMessage}</h2>
      <h3>Cuisines: {cuisines.join(", ")}</h3>

      <strong>Recommended Items</strong>
      <div>{menuItems === undefined && <p>No menu items found.</p>}</div>

      <ul>
        {menuItems?.map((menu) => (
          <li key={menu.card.info.id}>
            {menu.card.info.name} - at Rs.{menu.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
