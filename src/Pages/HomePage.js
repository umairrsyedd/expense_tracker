import React from "react";
import "../Styles/homepageStyles.css";
export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <body className="container">
          <div className="landing">
            <nav className="nav">
              <ul className="navList">
                <li>Tech Stack</li>
                <li>Developer</li>
                <li>Log In | Register</li>
              </ul>
            </nav>
            <heading className="hero">
              <div className="heroText">
                <h1 className="heroHeading">
                  Expense Tracker <br />
                  Built with The Mern Stack
                </h1>
                <button className="heroButton">Log In | Register </button>
              </div>
            </heading>
          </div>
          <section className="featuresContainer">
            <h2 className="sectionHeading"> Tech Stack </h2>
            <div className="cardContainer">
              <div className="featureCards">React Dashboard</div>
              <div className="featureCards">MongoDB Database</div>
              <div className="featureCards">Express Backend</div>
              <div className="featureCards">Ant Design</div>
              <div className="featureCards">Auth0 Authorization</div>
              <div className="featureCards">Context API State Management</div>
            </div>
          </section>
        </body>
      </>
    );
  }
}
