import React from "react";
import "../styles/components/About.scss";
import womanImage from "../assets/woman-at-cpu.png";

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="about__intro">
        <h2 className="x-lg-heading regular-weight text-center">
          What is a Surge Protection Plan?
        </h2>
        <p className="about__intro-body text-center">
          You'll receive up to $2,000 of annual coverage for eligible electronic
          devices and kitchen appliances in case of a damaging power surge.
        </p>
      </div>

      <div className="about__container">
        <div className="about__media" aria-hidden="true">
          <img src={womanImage} alt="" className="about__image" />
        </div>

        <div className="about__content">
          <h3 className="lg-heading regular-weight color_deep-sea">
            How does a Surge Protection Plan work?
          </h3>
          <p className="about__body">
            Direct Energy's Surge Protect plans provide up to a total of $2,000
            in annual coverage for eligible items with no long-term contract and
            no service call fee. Plus, any needed service will be provided by
            licensed, insured, and background-checked Master electricians.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
