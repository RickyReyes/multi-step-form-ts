import { Dispatch, SetStateAction } from "react";

interface FooterProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const Footer = ({ step, setStep }: FooterProps) => {
  function handleGoBack() {
    if (step > 1) {
      setStep((p) => p - 1);
    }
  }
  function handleNextStep() {
    if (step < 4) {
      setStep((p) => p + 1);
    }
  }

  return (
    <footer className="footer">
      {step > 1 && (
        <p onClick={handleGoBack} className="footer__go-back">
          Go back
        </p>
      )}
      <button onClick={handleNextStep} className="footer__next-step">
        Next Step
      </button>
    </footer>
  );
};

export default Footer;
