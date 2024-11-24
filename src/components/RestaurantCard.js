import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    props?.resData?.info;
  // console.log("props:", {
  //   name,
  //   cuisines,
  //   avgRating,
  //   sla,
  //   costForTwo,
  //   cloudinaryImageId,
  // });
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} className="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} </h4>
      <h4>{sla.deliveryTime} mins </h4>
      <h4>{costForTwo} </h4>
    </div>
  );
};

export default RestaurantCard;
