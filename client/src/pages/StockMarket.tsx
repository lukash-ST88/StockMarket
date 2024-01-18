import { useContext } from "react";
import Context from "../Context";

const StockMarket = () => {
    const {username} = useContext(Context);

    return (
    <div className="container divide-y-2">
    <div className="container text-center"> {username} </div>
    <div className="conatainer flex flex-wrap divide-x-2 justify-around">
        <div className="basis-1/4 grid grid-cols-1 p-3 m-3 border border-green-500">
            <div>select</div>
            <div>input</div>
            <div className="flex justify-center divide-x-2">
                <div>Sell</div>
                <div>Buy</div>
            </div>
        </div>
        <div className="basis-1/4 grid grid-cols-1">
            <button>My oredrs</button>
            <button>All orders</button>
            <button>Quotes</button>
        </div> 
        <table className="basis-1/4 table-auto">table</table>
    </div>
    </div>)
};
export default StockMarket;