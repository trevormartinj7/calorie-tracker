import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [calorieBudget, setCalorieBudget] = useState(1934);
  const [totalCalories, setTotalCalories] = useState(0);
  const [newCalories, setNewCalories] = useState(0);
  const [lastAdd, setLastAdd] = useState(0);

  function addOne() {
    setTotalCalories(totalCalories + 1);
  }

  function submitNewCalories() {
    setTotalCalories(totalCalories + newCalories);
    setLastAdd(newCalories);
    setNewCalories(0);
  }

  return (
    <div className="p-8 h-full w-full bg-gray-800">
      <div className="h-full w-full flex flex-col items-center justify-around bg-white rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="text-xl">Total Calories Eaten Today</div>
          <div className="text-3xl">
            {totalCalories}/{calorieBudget}
          </div>
        </div>

        <div className="h-40 w-full">
          {newCalories > 0 ? (
            <div className="flex flex-col items-center justify-center w-full">
              <div className="text-3xl">{newCalories}</div>
              <div className="flex justify-around w-1/2 mt-8">
                <button
                  className="bg-gray-300 p-4 rounded-lg"
                  onClick={() => setNewCalories(0)}
                >
                  Clear
                </button>
                <button
                  className="bg-gray-300 p-4 rounded-lg"
                  onClick={() => submitNewCalories()}
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex justify-around">
          <button
            className="w-1/4 flex justify-center items-center bg-gray-300 h-64"
            onClick={() => setNewCalories(newCalories + 10)}
          >
            +10 Cals
          </button>
          <button
            className="w-1/4 flex justify-center items-center bg-gray-300 h-64"
            onClick={() => setNewCalories(newCalories + 50)}
          >
            +50 Cals
          </button>
          <button
            className="w-1/4 flex justify-center items-center bg-gray-300 h-64"
            onClick={() => setNewCalories(newCalories + 100)}
          >
            +100 Cals
          </button>
        </div>
        <div className="flex w-full justify-around">
          <button
            className="text-sm"
            onClick={() => {
              setTotalCalories(totalCalories - lastAdd);
              setLastAdd(0);
            }}
          >
            Undo Last Add
          </button>
          <button className="text-sm" onClick={() => setTotalCalories(0)}>
            Reset Day
          </button>
        </div>
      </div>
    </div>
  );
}
