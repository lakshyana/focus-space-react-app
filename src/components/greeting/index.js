import React from "react";
import Moment from "react-moment";
import "moment-timezone";

const Greeting = () => {
let today = new Date();
let hours = today.getHours();

  let greeting = () => {
    if (today.getHours() >= 5 && today.getHours() < 11) {
      return "Good Morning ";
    } else if (today.getHours() >= 11 && today.getHours() < 17) {
      return "Good Afternoon ";
    } else if (today.getHours() >= 17 && today.getHours() < 24) {
      return "Good Evening ";
    } else {
      return "What are you doing up at this hour?";
    }
  };

  return (
    <>
      <div className={"text-center text-8xl pb-5 text-white"}>
        <Moment format="LT"></Moment>
      </div>
      <span className={"text-white fs-1 text-center"}>{greeting()}</span>
    </>
  );
}

export default Greeting;
