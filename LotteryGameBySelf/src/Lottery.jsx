import { useState } from "react";

export default function Lottery() {
  let [lotteryNum, setLotteryNum] = useState(null);
  let [sum, setSum] = useState(null); //add all ticket number for checking winning

  let drawLottery = () => {
    let number = Math.floor(Math.random() * 1000);
    setLotteryNum(number);
    let num1 = Math.floor(number / 100);
    let num2 = Math.floor(number / 10) % 10;
    let num3 = (number % 100) % 10;
    console.log(
      `For Winning is lottery we need some of number is "15" and the some of our number is: ${
        num1 + num2 + num3
      }`
    );
    setSum(num1 + num2 + num3);
  };
  return (
    <>
      {sum == 15 ? (
        <h2>Congratulations 🎉, You Won a Lottery! 🥳</h2>
      ) : (
        <>
          {sum ? (
            <h2>Oops!😥, Better luck next time</h2>
          ) : (
            <h2>Draw a Lottery</h2>
          )}
        </>
      )}
      <button onClick={drawLottery}>Get Ticket </button>
      {lotteryNum ? (
        <p>Your Lottery Number is: {lotteryNum}</p>
      ) : (
        <p>Click on "Get Ticket" button for your lottery Number</p>
      )}
    </>
  );
}
