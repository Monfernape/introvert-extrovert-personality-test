import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Header } from "../components";

type Props = {
  score: number;
};

const Introvert = () => {
  return (
    <div>
      <blockquote className="callout quote EN">
        Introverts live in two worlds: We visit the world of people, but
        solitude and the inner world will always be our home.
        <cite> - Jenn Granneman</cite>
      </blockquote>
      <h2>You're an introvert</h2>
    </div>
  );
};

const Extrovert = () => {
  return (
    <div>
      <blockquote className="callout quote EN">
        Extroversion is an enormously appealing personality style, but we've
        turned it into an oppressive standard to which most of us feel we must
        conform.
        <cite> - Susan Cain</cite>
      </blockquote>
      <h2>You're an extrovert</h2>
    </div>
  );
};

export const Evaluation = ({ score }: Props) => {
  const navigate = useNavigate();
  const isExtrovert = (score * 100) / 40 > 50;
  return (
    <div className="container">
      <Header />
      {isExtrovert ? <Extrovert /> : <Introvert />}
      <Button label={`Let's Evaluate`} onClick={() => navigate("/")} />
    </div>
  );
};
