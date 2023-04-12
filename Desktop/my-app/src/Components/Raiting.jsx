import React, { useState } from "react";
import "./Raiting.css";
import RaitingNumber from "./RaitingNumber";
import Card from "./UI/UI/Card";
import RatedCard from "./RatedCard";
import img from "../Group 4.svg";

const ReitingNumberList = [1, 2, 3, 4, 5];
const Reiting = (props) => {
  const [raitingNumber, setRaitingNumber] = useState();
  const [hide, setHide] = useState(true);

  const numberChangeHandler = (e) => {
    setRaitingNumber(e.target.textContent);
  };
  const submitHandler = () => {
    if (raitingNumber) {
      return setHide(false);
    }
  };
  return (
    <>
      {hide ? (
        <Card>
          <div className="container1">
            <img className="img" src={img} alt="logo" />

            <h2 className="title">How did we do?</h2>
            <p className="text1">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <ul className="raiting-list">
              {ReitingNumberList.map((item, i) => {
                return (
                  <RaitingNumber
                    key={i}
                    className={`list-item ${
                      Number(raitingNumber) === item ? "list-item-active" : ""
                    }`}
                    onClick={numberChangeHandler}
                  >
                    {item}
                  </RaitingNumber>
                );
              })}
            </ul>
            <div>
              <button onClick={submitHandler} type="submit" className="btn">
                SUBMIT
              </button>
            </div>
          </div>
        </Card>
      ) : (
        <RatedCard
          raitingNumber={raitingNumber}
          setRaitingNumber={setRaitingNumber}
        ></RatedCard>
      )}
    </>
  );
};
export default Reiting;
