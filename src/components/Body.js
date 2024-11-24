import { useState } from "react";
import { restObj } from "../../resturants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restObj);

  const filterRes = () => {
    setRestaurants(restObj.filter((res) => res.info.avgRating >= 4.5));
  };

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button className="filter-btn" onClick={filterRes}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurants?.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
