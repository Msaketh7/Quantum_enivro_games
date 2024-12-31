import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [statusMessage, setStatusMessage] = useState(""); // State for success or error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage(""); // Clear any previous message

    emailjs
      .sendForm(
        "service_c4oah4t", // Your EmailJS Service ID
        "template_2vv2fmj", // Your EmailJS Template ID
        e.target,
        "hDUw2IDpLRYZMGsXk" // Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          clearState();
          setStatusMessage("Message sent successfully!"); // Set success message
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setStatusMessage("Failed to send the message. Please try again later."); // Set error message
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  We’d love to hear from you! Whether you have a project idea,
                  are interested in collaborating, or just want to learn more
                  about Quantum Enviro Games, feel free to reach out.
                </p>
                <p>
                  We are open to partnerships, freelance opportunities, and
                  conversations with anyone in the gaming community!
                </p>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate="true" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        value={name}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={email}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
              {statusMessage && (
                <div
                  style={{
                    marginTop: "20px",
                    padding: "10px",
                    borderRadius: "5px",
                    backgroundColor: statusMessage.includes("successfully")
                      ? "#d4edda"
                      : "#f8d7da",
                    color: statusMessage.includes("successfully")
                      ? "#155724"
                      : "#721c24",
                    border: `1px solid ${
                      statusMessage.includes("successfully")
                        ? "#c3e6cb"
                        : "#f5c6cb"
                    }`,
                  }}
                >
                  {statusMessage}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>CONTACT INFO</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                <a href="mailto: admin@quantumenvirogames.com">
                  {props.data ? props.data.email : "loading"}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Help
                </span>{" "}
                <a href="mailto: qhelp@quantumenvirogames.com">
                  {props.data ? props.data.help : "loading"}
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.linkedin : "/"}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2024 Quantum Enviro Games</p>
        </div>
      </div>
    </div>
  );
};
