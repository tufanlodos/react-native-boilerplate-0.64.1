import React from "react";

export default () => {
  const Context = React.createContext();

  const Provider = ({ children, value }) => {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};
