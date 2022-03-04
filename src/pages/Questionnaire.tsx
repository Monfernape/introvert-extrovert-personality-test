import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Steps as Stepper } from "primereact/steps";
import { Step, Question, Header } from "../components";
import { QUESTIONS, STEPS } from "../constants";

type Props = {
  onScoreEvaluation: (answers: number[]) => void;
};

export const Questionnaire = ({ onScoreEvaluation }: Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([0, 0, 0, 0]);
  const navigate = useNavigate();
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === 3;
  const isDisableToMoveForward =
    currentStep === STEPS.length || answers[currentStep] === 0;

  useEffect(() => {
    if (currentStep === 4) {
      onScoreEvaluation(answers);
      navigate("/evaluation");
    }
  }, [currentStep, navigate, onScoreEvaluation, answers]);

  const saveAnswer = (answer: number, index: number) => {
    const updatedAnswer = answers.map((x, i) => (i === index ? answer : x));
    setAnswers(updatedAnswer);
  };

  return (
    <div className={"container"}>
      <Header />
      <div style={{ width: "95%" }}>
        <Stepper model={STEPS} activeIndex={currentStep} />
        <div style={{ padding: "50px 0px" }}>
          {QUESTIONS.map((question, index) => (
            <Step
              index={index}
              key={index}
              activeIndex={currentStep}
              component={
                <Question
                  details={question}
                  answer={answers[index]}
                  setAnswer={(answer) => saveAnswer(answer, index)}
                />
              }
            />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
          <Button
            label={"Previous"}
            disabled={isFirstStep}
            onClick={() => setCurrentStep((previous) => previous - 1)}
          />
          <Button
            label={isLastStep ? "Evaluate" : "Next"}
            disabled={isDisableToMoveForward}
            onClick={() => setCurrentStep((previous) => previous + 1)}
          />
        </div>
      </div>
    </div>
  );
};
