// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { Auth0Provider } from "@auth0/auth0-react";
import AuthenticationButton from "./Pages/AuthenticationButton";
function App() {
  return (
    <Auth0Provider>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/auth" component={AuthenticationButton} />
      </Router>
    </Auth0Provider>
  );
}

export default App;
