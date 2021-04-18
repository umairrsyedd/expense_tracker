import { useAuth0 } from "@auth0/auth0-react";
const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      variant="contained"
      color="primary"
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      SignUp
    </button>
  );
};

export default SignUpButton;
