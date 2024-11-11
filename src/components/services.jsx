import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
          At Quantum Enviro Games, we specialize in crafting visually immersive and engaging gaming experiences. As an indie game development studio, we focus on quality, innovation, and storytelling. Our services include:

          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <img src={d.img} alt="..." className="logo-img" />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        <div className="queries">
          <p>Any further queries feel free to reach out at <a href="#" >qservices@quantumenvirogames.com</a> </p>
        </div>
      </div>
    </div>
  );
};
