import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
// eslint-disable-next-line
import AuthenticationButton from "./Pages/AuthenticationButton";
// eslint-disable-next-line
import SignUpButton from "./Components/SignUp";
import DashboardPage from "./Pages/DashboardPage";
import ProtectedRoute from "./Auth/Protected_Route";
function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <ProtectedRoute path="/dashboard" component={DashboardPage} />
    </>
  );
}

export default App;
