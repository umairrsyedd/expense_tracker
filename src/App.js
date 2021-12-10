import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
// eslint-disable-next-line
import AuthenticationButton from "./Pages/AuthenticationButton";
// eslint-disable-next-line
import SignUpButton from "./Components/SignUp";
import DashboardPage from "./Pages/DashboardPage";
import ProtectedRoute from "./Auth/Protected_Route";
import { UserProvider } from "./Auth/UserContext";
function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <UserProvider>
        <ProtectedRoute
          path="/dashboard"
          component={DashboardPage}
        ></ProtectedRoute>
      </UserProvider>
    </>
  );
}

export default App;
