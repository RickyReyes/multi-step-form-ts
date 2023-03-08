import { Dispatch, SetStateAction } from "react";
import { ISummary } from "../App";

interface SummaryProps {
  summary: ISummary;
  setSummary: Dispatch<SetStateAction<ISummary>>;
}

const Summary = ({ summary, setSummary }: SummaryProps) => {
  const { plan, yearly, addOns } = summary;

  const total = yearly
    ? plan.yearlyPrice + addOns.reduce((acc, curr) => acc + curr.yearlyPrice, 0)
    : plan.monthlyPrice +
      addOns.reduce((acc, curr) => acc + curr.monthlyPrice, 0);

  return (
    <>
      <section className="summary">
        <div className="summary__top">
          <div className="summary__flex">
            <div className="summary__name">
              {summary.plan.name} ({summary.yearly ? "Yearly" : "Monthly"})
            </div>
            <div className="summary__change">Change</div>
          </div>
          <div className="summary__price">
            ${yearly ? plan.yearlyPrice : plan.monthlyPrice}/
            {yearly ? "yr" : "mo"}
          </div>
        </div>
        {addOns.length > 0 && (
          <ul className="summary__bottom">
            {summary.addOns.map((addOn) => (
              <li className="summary__add-on">
                <div className="summary__add-on--name">{addOn.name}</div>
                <div className="summary__add-on--price">
                  +${summary.yearly ? addOn.yearlyPrice : addOn.monthlyPrice}/
                  {yearly ? "yr" : "mo"}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
      <div className="summary__total">
        <div className="summary__total--label">
          Total (per {yearly ? "year" : "month"})
        </div>
        <div className="summary__total--amount">
          +${total}/{yearly ? "yr" : "mo"}
        </div>
      </div>
    </>
  );
};

export default Summary;
