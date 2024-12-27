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
    <div className="p-4 m-4 w-60 border border-solid border-gray-400 rounded-lg bg-orange-100 hover:bg-orange-500">
      <img src={CDN_URL + cloudinaryImageId} className="rounded-lg" />
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} </h4>
      <h4>{sla.deliveryTime} mins </h4>
      <h4>{costForTwo} </h4>
    </div>
  );
};

export default RestaurantCard;
