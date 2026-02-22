import React from "react";
import "../styles/components/Hero.scss";
import heroImage from "../assets/man-on-cpu-potatoa.png";
import grayCurve from "../assets/gray-curve.svg";

interface HeroProps {
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Surge Protection Plans",
  body = "When bad weather threatens your eletronics and appliances. Direct Energy Surge Protect provided by Allied Warranty will make sure you are protected with our surge protection plans.",
  ctaLabel = "LEARN MORE",
  ctaHref = "#",
}) => {
  return (
    <section className="hero" aria-label="Surge Protection Plans">
      <div className="hero__container container">
        <div className="hero__content">
          <h2 className="display-heading light-weight hero__title">{title}</h2>
          <p className="hero__body">{body}</p>
          <a href={ctaHref} className="border-color_deep-sea uppercase">
            {ctaLabel}
          </a>
        </div>

        <div className="hero__media" aria-hidden="true">
          <div className="hero__image-wrapper">
            <img
              src={heroImage}
              alt="Person working on a laptop"
              className="hero__image"
            />
          </div>
        </div>
      </div>

      <img src={grayCurve} alt="" aria-hidden="true" className="hero__curve" />
    </section>
  );
};

export default Hero;
