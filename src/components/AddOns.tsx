import checkmark from "../assets/images/icon-checkmark.svg";
import { IAddOn, ISummary } from "../App";
import { Dispatch, SetStateAction } from "react";

interface AddOnsProps {
  addOns: IAddOn[];
  summary: ISummary;
  setSummary: Dispatch<SetStateAction<ISummary>>;
}

const AddOns = ({ addOns, summary, setSummary }: AddOnsProps) => {
  console.log(summary);
  return (
    <ul className="add-ons">
      {addOns.map((addOn: IAddOn) => (
        <li
          key={addOn.name}
          className={`add-on ${
            summary.addOns.includes(addOn) ? "selected" : ""
          }`}
        >
          <img src={checkmark} alt="checkmark" />
          <input
            className="add-on__checkbox"
            type="checkbox"
            id={addOn.name}
            onChange={() => {
              setSummary((prevSummary: ISummary) => ({
                ...prevSummary,
                addOns: prevSummary.addOns?.includes(addOn)
                  ? prevSummary.addOns.filter(
                      (prevAddOn) => prevAddOn.name !== addOn.name
                    )
                  : [...prevSummary.addOns, addOn],
              }));
            }}
            checked={summary.addOns.includes(addOn)}
          />
          <label className="add-on__label" htmlFor={addOn.name}>
            <div className="add-on__name">{addOn.name}</div>
            <div className="add-on__description">{addOn.description}</div>
          </label>
          <p className="add-on__promotion">
            {summary.yearly
              ? `+$${addOn.yearlyPrice}/yr`
              : `+$${addOn.monthlyPrice}/mo`}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default AddOns;
