import { useState } from "react";
import { PrimaryButton } from "@/components/styled/Buttons";
import { BoldText } from "@/components/styled/Text";
import Range from "@/components/Range";
import CountHOC from "@/HOC/CountHOC";

// HOC =>

const data = [
  {
    id: 1,
    name: "John",
    count: 0,
  },

  {
    id: 2,
    name: "John2",
    count: 0,
  },

  {
    id: 3,
    name: "John3",
    count: 0,
  },
];

interface IItem {
  id?: number;
  name?: string;
  count?: number;
}

const HomePage = ({handleClickPlus, handleClickMinus, count}: any) => {
  // IItem[] => [{id, name, count}]
  // IItem => {id, name, count}


  return (
    <>
      <div>
        <button onClick={handleClickPlus}>+</button>

        {count}
        <button onClick={handleClickMinus}>-</button>
      </div>

      <Range />
    </>
  );
};

export default CountHOC(HomePage);
