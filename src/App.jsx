import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

let user = {
  isLogged: false,
};
export const UserContext = React.createContext(user.isLogged);

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const setAuth = () => {
    setIsLogged(!isLogged);
  };
  return (
    <UserContext.Provider value={(isLogged, setAuth)}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
