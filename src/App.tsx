import arcadeIcon from "./assets/images/icon-arcade.svg";
import advancedIcon from "./assets/images/icon-advanced.svg";
import proIcon from "./assets/images/icon-pro.svg";

import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import Plan from "./components/Plan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import ThankYou from "./components/ThankYou";
import Footer from "./components/Footer";

export interface IPlan {
  name: string;
  icon: string;
  iconAlt: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

export interface IAddOn {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

export interface ISummary {
  yearly: boolean;
  plan: IPlan;
  addOns: IAddOn[];
}

const planArray = [
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

const addOnsData = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    name: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

function App() {
  const [step, setStep] = useState(1);
  const [planData] = useState(planArray);
  const [addOns] = useState(addOnsData);
  const [confirmed] = useState(false);

  const [summary, setSummary] = useState<ISummary>({
    yearly: false,
    plan: planArray[0],
    addOns: [],
  });

  return (
    <div className="App">
      <Header step={step} />
      {step === 1 && (
        <Card
          heading="Personal info"
          desc="Please provide your name, email address and phone number."
          body={<PersonalInfo />}
        />
      )}
      {step === 2 && (
        <Card
          heading="Select your plan"
          desc="You have the option of monthly or yearly billing."
          body={
            <Plan
              planData={planData}
              summary={summary}
              setSummary={setSummary}
            />
          }
        />
      )}
      {step === 3 && (
        <Card
          heading="Pick add-ons"
          desc="Add-ons help enhance your gaming experience."
          body={
            <AddOns addOns={addOns} summary={summary} setSummary={setSummary} />
          }
        />
      )}
      {step === 4 && (
        <Card
          heading="Finishing up"
          desc="Double-check everything looks OK before confirming."
          body={<Summary summary={summary} setSummary={setSummary} />}
        />
      )}
      {step === 4 && confirmed && <ThankYou />}
      <Footer step={step} setStep={setStep} />
    </div>
  );
}

export default App;
