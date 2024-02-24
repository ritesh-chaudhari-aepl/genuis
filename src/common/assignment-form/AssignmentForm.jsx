import { useState } from "react";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";

const AssignmentForm = () => {
  const [step1Data, setStep1Data] = useState(null);

  const handleStep1Submit = (data) => {
    setStep1Data(data); // Set the submitted data from Form 1
  };

  // console.log(step1Data, location, "step1data, location");

  return (
    <div>
      {!step1Data && <Step1Form onSubmit={handleStep1Submit} />}
      {step1Data && <Step2Form data={step1Data} />}
    </div>
  );
};

export default AssignmentForm;
