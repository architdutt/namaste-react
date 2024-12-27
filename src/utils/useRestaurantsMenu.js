import { useEffect, useState } from "react";
import { RESTAURANT_INFO } from "./constant";

export const useRestaurantsMenu = (restaurantId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantsMenu(restaurantId);
  }, []);

  const fetchRestaurantsMenu = async (restaurantId) => {
    const response = await fetch(RESTAURANT_INFO + restaurantId);
    const data = await response.json();
    console.log("Menu", data);
    setResInfo(data);
  };
  return resInfo;
};
