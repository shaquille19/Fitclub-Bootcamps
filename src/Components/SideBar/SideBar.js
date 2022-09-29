import React from "react";
import AddBreak from "../AddBreak/AddBreak";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";
import UserInfo from "../UserInfo/UserInfo";

const SideBar = ({ totalTime, setBonusTimeInPage }) => {
  return (
    <div className="bg-white px-5 py-7 col-span-1 row-span-5 order-3 lg:order-2 lg:sticky lg:top-0">
      <UserInfo />
      <AddBreak setBonusTimeInPage={setBonusTimeInPage} />
      <ExerciseDetails totalTime={totalTime} />
    </div>
  );
};

export default SideBar;
