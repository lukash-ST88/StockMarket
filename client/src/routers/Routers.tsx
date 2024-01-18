import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import StockMarket from "../pages/StockMarket";

const Routers = () => {
    return (<>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/stock-market" element={<StockMarket/>} />
    </Routes>
    </>)
}