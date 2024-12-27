import React from "react";
import rules from "../images/rules.png";

function Rules() {
  return (
    <div>
      <div className="m-4 p-2 text-center flex items-center justify-center flex-col shadow-2xl rounded-xl lg:w-[50%] mx-auto">
        <h2 className="text-3xl my-5  w-full">Rules of La Elan </h2>
        <img src={rules} alt="" />
      </div>
    </div>
  );
}

export default Rules;
