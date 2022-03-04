import { Card } from "primereact/card";
import { RadioButton } from "primereact/radiobutton";
import { Question as QuestionDetails } from "../types";

type Props = {
  details: QuestionDetails;
  answer: number;
  setAnswer: (answer: number) => void;
};

export const Question = ({
  details: { title, options },
  answer,
  setAnswer
}: Props) => {
  return (
    <Card title={title}>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {options.map((x, index) => (
          <div key={`option-${index + 1}`}>
            <RadioButton
              inputId={`option-${index + 1}`}
              value={x.value}
              name={"question"}
              checked={answer === x.value}
              onChange={(event) => setAnswer(event.value)}
            />
            <label style={{ padding: 10 }} htmlFor={`option-${index + 1}`}>
              {x.label}
            </label>
          </div>
        ))}
      </div>
    </Card>
  );
};
