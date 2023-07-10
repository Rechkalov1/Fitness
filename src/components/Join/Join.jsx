import React, { useRef } from "react";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";

import "./Join.css";
import emailjs from "@emailjs/browser";
const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bvogejp",
        "template_ivbj7bo",
        form.current,
        "qmIdGbjPswkpoor64"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <div>
            <span className="stroke-text">ready to</span>
            <span>level up</span>
          </div>
          <div>
            <span>your body</span>
            <span className="stroke-text">with us?</span>
          </div>
        </div>
      </div>
      <div>
        <img src={nb} alt="" />
        <img src={adidas} alt="" />
        <img src={nike} alt="" />
      </div>
      <div className="right-j">
        <form
          onSubmit={sendEmail}
          ref={form}
          action=""
          className="email-container"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
