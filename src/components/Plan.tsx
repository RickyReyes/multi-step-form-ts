import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

import { useState } from "react";

const planData = [
  {
    name: "Arcade",
    icon: arcadeIcon,
    iconAlt: "arcade membership icon",
    monthlyPrice: 9,
    yearlyPrice: 90,
  },
  {
    name: "Advanced",
    icon: advancedIcon,
    iconAlt: "advanced membership icon",
    monthlyPrice: 12,
    yearlyPrice: 120,
  },
  {
    name: "Pro",
    icon: proIcon,
    iconAlt: "pro membership icon",
    monthlyPrice: 15,
    yearlyPrice: 150,
  },
];

const Plan = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <ul className="plan">
        {planData.map((plan) => (
          <li className="plan__li">
            <img className="plan__icon" src={plan.icon} alt={plan.iconAlt} />
            <div>
              <div className="plan__name">{plan.name}</div>
              <div className="plan__price">
                ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                /mo
              </div>
              {yearly && <p className="plan__promotion">2 months free</p>}
            </div>
          </li>
        ))}
      </ul>
      <section className="plan-type">
        <p className={`plan-type__type ${!yearly ? "selected" : ""}`}>
          Monthly
        </p>
        <div
          onClick={() => {
            yearly ? setYearly(false) : setYearly(true);
          }}
          className="plan-type__pill"
        >
          <div
            className={`plan-type__pill--circle ${yearly ? "yearly" : ""}`}
          ></div>
        </div>
        <p className={`plan-type__type ${yearly ? "selected" : ""}`}>Yearly</p>
      </section>
    </>
  );
};

export default Plan;
