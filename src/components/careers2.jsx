import React from "react";

export const Careers2 = (props) => {
  return (
    <div id="careers2" className="careers-section text-center">
      <div className="container">
        <div className="section-title">
          <h2>Career Opportunities</h2>
          <p>
            Join us at Quantum Enviro Games and be part of our journey to create immersive and unforgettable gaming experiences. We are looking for talented individuals across various fields.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 careers2-item">
                  <div className="careers2-content">
                    <div className="careers2-desc">
                      <h3>{d.name}</h3>
                      <p>{d.description}</p>
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
        <div className="queries">
          <p>
            Click here to <a href="https://forms.gle/rjEiMBjjwVPxxfvm6" target="_blank">Apply</a>
          </p>
        </div>
      </div>
    </div>
  );
};
