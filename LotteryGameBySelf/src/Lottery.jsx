export default function Lottery(){
    let drawLottery = () => {
        console.log("Have a nice day")
    }
    return(
        <>
        <h2>Draw a Lottery</h2>
        <button onClick={drawLottery}>Draw</button>
        <p>Your Lottery No. is: {}</p>
        </>
    );
}