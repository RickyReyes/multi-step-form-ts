import { Dispatch, SetStateAction } from "react";
import { ISummary } from "../App";

interface SummaryProps {
  summary: ISummary;
  setSummary: Dispatch<SetStateAction<ISummary>>;
}

const Summary = ({ summary, setSummary }: SummaryProps) => {
  return (
    <section className="summary">
      <li className="summary__li">
        <div className="summary__flex">
          <div className="summary__name">
            {summary.plan.name} ({summary.yearly ? "Yearly" : "Monthly"})
          </div>
          <div className="summary__change">Change</div>
        </div>
        <div className="summary__price">${summary.plan.monthlyPrice}/mo</div>
      </li>
      {summary.addOns.map((addOn) => (
        <li className="summary__add-on">
          <div className="summary__add-on--name">{addOn.name}</div>
          <div className="summary__add-on--price">
            +${summary.yearly ? addOn.yearlyPrice : addOn.monthlyPrice}/mo
          </div>
        </li>
      ))}
      <div className="summary__total">
        <div className="summary__total--label"></div>
        <div className="summary__total--amount"></div>
      </div>
    </section>
  );
};

export default Summary;
