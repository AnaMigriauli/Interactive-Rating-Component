import React from "react";
import "./RatedCard.css";
import img from "../Online payment_Two Color(1) 2.svg";
import Card from "./UI/UI/Card";

const RatedCard = (props) => {
  return (
    <Card className={props.className}>
      <div className="container2">
        <img className="img2" src={img} alt="logo" />

        <p className="rate">{`You selected ${props.raitingNumber} out of 5`}</p>
        <h2 className="rated-cart-heading">Thank you!</h2>
        <p className="text2">
          We appreciate you taking the time to give a rating. If you ever need
          more support, dont hesitate to get in touch!
        </p>
      </div>
    </Card>
  );
};
export default RatedCard;
