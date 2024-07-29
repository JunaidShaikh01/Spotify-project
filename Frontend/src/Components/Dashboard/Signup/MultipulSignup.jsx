import React, { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import FinalPage from "./FinalPage";

export default function MultipulSignup() {
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 && <Page1 setStep={setStep} />}
      {step === 2 && <Page2 setStep={setStep} />}
      {step === 3 && <Page3 setStep={setStep} />}
      {step === 4 && <FinalPage setStep={setStep} />}
    </div>
  );
}
