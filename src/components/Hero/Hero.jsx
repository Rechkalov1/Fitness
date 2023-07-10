import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/*The best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in de town</span>
        </div>
        {/* Hero Heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              in here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>

          {/*Figures */}
        </div>
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>expert coach</span>
          </div>
          <div>
            <span>
              <NumberCounter end={948} start={800} delay="4" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay="2" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero buttons*/}
        <div className="hero-buttons">
          <button className="btn">Get Started </button>
          <button className="btn"> Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="heart" />
          <span> Heart Rate</span>
          <span>
            <NumberCounter end={116} start={50} delay="2" preFix=" bpm" />
          </span>
        </motion.div>

        {/*hero images */}
        <img src={hero_image} alt="hero" className="hero-image" />
        <motion.img
          initial={{ right: "15rem" }}
          whileInView={{ right: "30rem" }}
          transition={transition}
          src={hero_image_back}
          alt="hero"
          className="hero-image-back"
        />
        {/*Calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
