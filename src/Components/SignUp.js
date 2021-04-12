import { useAuth0 } from "@auth0/auth0-react";
import Button from "@material-ui/core/Button";
const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      SignUp
    </Button>
  );
};

export default SignUpButton;
