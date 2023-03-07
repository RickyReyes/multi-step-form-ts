import { Dispatch, SetStateAction } from "react";
import { IPlan, ISummary } from "../App";

interface PlanProps {
  planData: IPlan[];
  summary: ISummary;
  setSummary: Dispatch<SetStateAction<ISummary>>;
}

const Plan = ({ planData, summary, setSummary }: PlanProps) => {
  return (
    <>
      <ul className="plan">
        {planData.map((plan) => (
          <li
            key={plan.name}
            className={`plan__li ${
              plan.name === summary.plan.name ? "selected" : ""
            }`}
            onClick={() =>
              setSummary((prev) => ({
                ...prev,
                plan: plan,
              }))
            }
          >
            <img className="plan__icon" src={plan.icon} alt={plan.iconAlt} />
            <div>
              <div className="plan__name">{plan.name}</div>
              <div className="plan__description">
                ${summary.yearly ? plan.yearlyPrice : plan.monthlyPrice}
                /mo
              </div>
              {summary.yearly && (
                <p className="plan__promotion">2 months free</p>
              )}
            </div>
          </li>
        ))}
      </ul>
      <section className="plan-length">
        <p className={`plan-length__name ${!summary.yearly ? "selected" : ""}`}>
          Monthly
        </p>
        <div
          onClick={() =>
            setSummary((prevSummary) => ({
              ...prevSummary,
              yearly: !prevSummary.yearly,
            }))
          }
          className="plan-length__pill"
        >
          <div
            className={`plan-length__pill--circle ${
              summary.yearly ? "yearly" : ""
            }`}
          ></div>
        </div>
        <p className={`plan-length__name ${summary.yearly ? "selected" : ""}`}>
          Yearly
        </p>
      </section>
    </>
  );
};

export default Plan;
