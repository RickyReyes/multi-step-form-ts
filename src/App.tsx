import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import Plan from "./components/Plan";
import AddOns from "./components/AddOns";
import FinishingUp from "./components/FinishingUp";
import ThankYou from "./components/ThankYou";
import Footer from "./components/Footer";

function App() {
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
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
          body={<Plan />}
        />
      )}
      {step === 3 && (
        <Card
          heading="Pick add-ons"
          desc="Add-ons help enhance your gaming experience."
          body={<AddOns />}
        />
      )}
      {step === 4 && <FinishingUp />}
      {step === 4 && confirmed && <ThankYou />}
      <Footer step={step} setStep={setStep} />
    </div>
  );
}

export default App;
