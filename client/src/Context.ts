import React from 'react'

interface IContext {
    username: string;
    setUsername?: any;
  }
  
  const defaultState = {
    username: ""
  };
const Context = React.createContext<IContext>(defaultState);

export default Context;