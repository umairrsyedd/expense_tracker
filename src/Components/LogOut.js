import { useAuth0 } from "@auth0/auth0-react";
const LogOut = () => {
  const { logout } = useAuth0();
  const buttonStyle = {
    border: "none",
    textAlign: "center",
    fontSize: "1rem",
    backgroundColor: "#278CF3",
    color: "#FFFFFF",
    cursor: "pointer",
    // marginLeft: "auto",
    // marginRight: "1vw",
    padding: "0px 10px 0px 10px",
  };
  return (
    <button
      style={buttonStyle}
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogOut;
