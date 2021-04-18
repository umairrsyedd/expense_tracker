import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AuthenticationButton from "./Pages/AuthenticationButton";
import SignUpButton from "./Components/SignUp";
import DashboardLayout from "./Pages/DashboardLayout";
import Profile from "./Components/Profile";
import ProtectedRoute from "./Auth/Protected_Route";
function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/auth" component={AuthenticationButton} />
      <Route exact path="/signup" component={SignUpButton} />
      <ProtectedRoute path="/dashboard" component={DashboardLayout} />
      <ProtectedRoute exact path="/profile" component={Profile} />
    </>
  );
}

export default App;
