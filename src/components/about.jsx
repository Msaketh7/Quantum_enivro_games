import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        {/* About Us Section */}
        <div className="about-text">
          <h2 className="about-title">About Us</h2>
          <p className="about-paragraph">
            {props.data ? props.data.paragraph1 : "loading..."}
          </p>
          <p className="about-paragraph">
            {props.data ? props.data.paragraph2 : "loading..."}
          </p>
          <p className="about-paragraph">
            {props.data ? props.data.paragraph3 : "loading..."}
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="about-text">
          <h2 className="about-title">Why Choose Us?</h2>
          <ul>
            {props.data
              ? props.data.Why.map((d, i) => (
                  <li key={`${d}-${i}`} className="about-list-item">
                    {d}
                  </li>
                ))
              : "loading..."}
          </ul>
        </div>
      </div>
    </div>
  );
};



