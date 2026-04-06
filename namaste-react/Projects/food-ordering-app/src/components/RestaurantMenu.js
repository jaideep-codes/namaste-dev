import { useEffect } from "react";
import mockData from "../mockData.js";

const RestaurantMenu = () => {
  useEffect(() => {
    console.log(mockData);
  }, []);

  return (
    <div>
      <h1>Domino's</h1>
      <h2>Menu</h2>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
        <li>Garlic bread</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
