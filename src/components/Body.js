import { useEffect, useState } from "react";
import { restObj } from "../../resturants";
import RestaurantCard, { withQuickDelivery } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const RestaurantCardWithQuickDelivery = withQuickDelivery(RestaurantCard);

  const filterRes = () => {
    setFilteredRestaurants(
      restaurants.filter((res) => res.info.avgRating >= 4.5)
    );
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9063433&lng=77.5856825&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log(
    //   "info",
    //   jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    // );
    setRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are Offline. Please check your internet connection!!
      </h1>
    );
  }

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" dark:bg-slate-800">
      <div className="flex  items-center m-4 p-4">
        <input
          type="text"
          className="border border-solid border-gray-950"
          class="focus:ring-2 focus:ring-orange-100 focus:outline-none appearance-none w-6/12 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-200 shadow-sm"
          aria-label="Filter restaurants"
          placeholder="Filter restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-4 mx-4 bg-orange-100 border border-solid border-gray-950 rounded-lg hover:bg-orange-500"
          onClick={() => {
            console.log(searchText);
            setFilteredRestaurants(
              restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>

        <div className=" ">
          <button
            className="px-4 mx-4 bg-orange-100 border border-solid border-gray-950 rounded-lg hover:bg-orange-500"
            onClick={filterRes}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurants?.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {" "}
            {res.info.sla.deliveryTime < 30 ? (
              <RestaurantCardWithQuickDelivery resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
