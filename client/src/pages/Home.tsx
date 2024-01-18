import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../Context";

const Home = () => {
    const {username, setUsername} = useContext(Context);

  return (
    <Context.Provider value={{username}}>
    <div className="grid grid-col-1 gap-3 justify-center text-center text-2xl rounded-xl border border-green-500 m-5 p-5">
      <div>
        <div> {username}</div>
        <label htmlFor="username">Enter username: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
          className="border border-green-500"
        />
      </div>
      <Link to="/stock-market" className="text-center border bg-green-500 rounded-md text-white hover:text-green-500 hover:bg-white">
        Go to Stock Market
      </Link>
    </div>
    </Context.Provider>
  );
};
export default Home;
