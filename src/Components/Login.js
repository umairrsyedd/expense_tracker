import { useAuth0 } from "@auth0/auth0-react";
import "../Styles/homepageStyles.css";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <button className="heroButton" onClick={() => loginWithRedirect()}>
        Log In | Register
      </button>
    </>
  );
};

export default LoginButton;
