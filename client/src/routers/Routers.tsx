import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import StockMarket from "../pages/StockMarket";
import Context from "../Context";
import { useState } from "react";

const Routers = () => {
    const [username, setUsername] = useState("");
    
    return (<>
    <Context.Provider value={{username, setUsername}}>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/stock-market" element={<StockMarket/>} />
    </Routes>
    </Context.Provider>
    </>)
};
export default Routers;