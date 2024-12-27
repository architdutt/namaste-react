import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import  AboutClass  from "./components/AboutClass";

const AboutClass = lazy(() => import("./components/AboutClass"));

// const Burgers = {
//   info: {
//     id: "42579",
//     name: "Burger King",
//     cloudinaryImageId:
//       "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_42579.JPG",
//     locality: "Vega City Mall",
//     areaName: "Btm Layout",
//     costForTwo: "₹350 for two",
//     cuisines: ["Burgers", "American"],
//     avgRating: 4.3,
//     parentId: "166",
//     avgRatingString: "4.3",
//     totalRatingsString: "45K+",
//     sla: {
//       deliveryTime: 30,
//       lastMileTravel: 1.3,
//       serviceability: "SERVICEABLE",
//       slaString: "30-35 mins",
//       lastMileTravelString: "1.3 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2024-11-11 04:00:00",
//       opened: true,
//     },
//     badges: {
//       imageBadges: [
//         {
//           imageId: "Rxawards/_CATEGORY-Burger.png",
//           description: "Delivery!",
//         },
//       ],
//     },
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {
//           badgeObject: [
//             {
//               attributes: {
//                 description: "Delivery!",
//                 imageId: "Rxawards/_CATEGORY-Burger.png",
//               },
//             },
//           ],
//         },
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "60% OFF",
//       subHeader: "UPTO ₹120",
//     },
//     orderabilityCommunication: {
//       title: {},
//       subTitle: {},
//       message: {},
//       customIcon: {},
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//     externalRatings: {
//       aggregatedRating: {
//         rating: "--",
//       },
//     },
//     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//   },
//   analytics: {
//     context: "seo-data-2c23ec7a-1db7-4a94-b3ee-5d4427b2a8b3",
//   },
//   cta: {
//     link: "https://www.swiggy.com/city/bangalore/burger-king-vega-city-mall-btm-layout-rest42579",
//     text: "RESTAURANT_MENU",
//     type: "WEBLINK",
//   },
//   widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
// };

// const resObj = {
//   info: {
//     id: "17312",
//     name: "KFC",
//     cloudinaryImageId:
//       "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/2235603f-9371-48b4-aaa0-cac02cc2feb0_17312.JPG",
//     locality: "4th Phase",
//     areaName: "JP Nagar",
//     costForTwo: "₹400 for two",
//     cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
//     avgRating: 4.4,
//     parentId: "547",
//     avgRatingString: "4.4",
//     totalRatingsString: "27K+",
//     sla: {
//       deliveryTime: 20,
//       lastMileTravel: 1.2,
//       serviceability: "SERVICEABLE",
//       slaString: "20-25 mins",
//       lastMileTravelString: "1.2 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2024-11-11 01:00:00",
//       opened: true,
//     },
//     badges: {},
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {},
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "40% OFF",
//       subHeader: "UPTO ₹80",
//     },
//     orderabilityCommunication: {
//       title: {},
//       subTitle: {},
//       message: {},
//       customIcon: {},
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//     externalRatings: {
//       aggregatedRating: {
//         rating: "--",
//       },
//     },
//     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//   },
//   analytics: {
//     context: "seo-data-2c23ec7a-1db7-4a94-b3ee-5d4427b2a8b3",
//   },
//   cta: {
//     link: "https://www.swiggy.com/city/bangalore/kfc-4th-phase-jp-nagar-rest17312",
//     text: "RESTAURANT_MENU",
//     type: "WEBLINK",
//   },
//   widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
// };

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            {" "}
            <AboutClass />{" "}
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
      {
        path: "/restaurants/:restaurantId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout />);
