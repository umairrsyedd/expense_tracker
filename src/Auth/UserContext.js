import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
export const UserContext = React.createContext("Default");

export const UserProvider = (props) => {
  const [ID, setID] = useState("UserProvider UnLoaded");
  const { user, isAuthenticated } = useAuth0();
  const { email } = user;
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`http://localhost:6500/User/?Email=${email}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result.ID))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <UserContext.Provider value={ID}>{props.children}</UserContext.Provider>
  );
};
