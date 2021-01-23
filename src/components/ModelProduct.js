import React from 'react';
import Model from "./Model";
import Solar from "../assets/Desktop-SolarPanels.jpeg";
import ModelS from "../assets/Desktop-ModelS.jpeg";
import Model3 from "../assets/Desktop-Model3.jpeg";
import ModelX from "../assets/Desktop-ModelX.jpeg";
import ModelY from "../assets/Desktop-ModelY.jpeg";
import SolarRoof from "../assets/Desktop-SolarRoof.jpeg";
import Accessories from "../assets/Desktop-Accessories.jpg";

const Product = () => {
    return (
        <div className="model-product">
            <Model title="Lowest Cost Solar Panels in America"
            text="Money-back guarantee"
            backgroundImage={Solar}
            leftButton="Order Now"
            rightButton="Learn More"
            />
            <Model title="Model S"
            text="Starting at $69,420"
            backgroundImage={ModelS}
            leftButton="Order Now"
            rightButton="Learn More"
            />
            <Model title="Model 3"
            text="Order Online for Touchless Delivery"
            backgroundImage={Model3}
            leftButton="Order Now"
            rightButton="Learn More"
            />
            <Model title="Model X"
            text="Order Online for Touchless Delivery"
            backgroundImage={ModelX}
            leftButton="Order Now"
            rightButton="Learn More"
            />
            <Model title="Model Y"
            text="Order Online for Touchless Delivery"
            backgroundImage={ModelY}
            leftButton="Order Now"
            rightButton="Learn More"
            />
            <Model title="Solar for New Roofs"
            text="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImage={SolarRoof}
            leftButton="Order Now"
            rightButton="Learn More"
            />
            <Model title="Accessories"
            backgroundImage={Accessories}
            middleButton="Shop Now"
            />
        </div>
    )
}

export default Product;

