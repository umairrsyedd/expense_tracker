import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AuthenticationButton from "./Pages/AuthenticationButton";
import SignUpButton from "./Components/SignUp";
function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/auth" component={AuthenticationButton} />
      <Route exact path="/signup" component={SignUpButton} />
    </>
  );
}

export default App;
