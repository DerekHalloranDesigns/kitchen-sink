import React from "react";
import "../styles/components/Plans.scss";
import plugIcon from "../assets/plug-circle-bolt.svg";

interface Plan {
  title: string;
  features: string[];
  price: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const plans: Plan[] = [
  {
    title: "Direct Energy $1000-Surge Protect",
    features: [
      "No service call fee, no long term contract, no pre-inspection required",
      "Up to $1000 in annual coverage",
      "Low monthly fee, convienently added right to your Direct Energy bill",
    ],
    price: "$6.99/mo",
    ctaLabel: "Select Offer",
    ctaHref: "#",
  },
  {
    title: "Direct Energy $2000-Surge Protect",
    features: [
      "No service call fee, no long term contract, no pre-inspection required",
      "Up to $1000 in annual coverage",
      "Low monthly fee, convienently added right to your Direct Energy bill",
    ],
    price: "$9.99/mo",
    ctaLabel: "Select Offer",
    ctaHref: "#",
  },
];

const Plans: React.FC = () => {
  return (
    <section className="plans">
      <div className="plans__container container">
        {plans.map((plan, index) => (
          <div className="plans__card" key={index}>
            <div className="plans__icon-wrapper" aria-hidden="true">
              <img src={plugIcon} alt="" className="plans__icon" />
            </div>

            <h3 className="plans__title sm-heading bold color_deep-sea">
              {plan.title}
            </h3>

            <ul className="plans__features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <p className="plans__price x-lg-heading color_deep-sea">
              {plan.price}
            </p>

            <a
              href={plan.ctaHref}
              className="background-color_bright-orange plans__cta"
            >
              {plan.ctaLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
