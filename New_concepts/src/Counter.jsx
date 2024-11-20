import { useState, useEffect } from "react";

export default function () {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  let IncCountx = () => {
    setCountx((currCount) => currCount + 1);
  };
  let IncCounty = () => {
    setCounty((currCount) => currCount + 1);
  };

  useEffect(
    function sideEffect() {
      console.log("This is side effect");
    },
    []
    // [] work only rendering at First
    // [county] effected by only county's action
    // [countx, countx] work on both's action
    // if you not give anything then effected by all states value
  );

  return (
    <>
      <h2>Countx = {countx}</h2>
      <button onClick={IncCountx}>+1</button>
      <br />
      <h2>County = {county}</h2>
      <button onClick={IncCounty}>+1</button>
    </>
  );
}
