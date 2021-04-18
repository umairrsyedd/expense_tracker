import React from "react";
import { Link } from "react-router-dom";
export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <h2>Expense Tracker Built Using React, Express, MongoDB</h2>
        <Link to="/auth">
          <button> Log In </button>
        </Link>
        <Link to="/signup">
          <button> SignUp </button>
        </Link>
      </>
    );
  }
}
