import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Header } from "../components";

export const Introduction = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Header />
      <blockquote className="callout quote EN">
        Introverts enjoy people-watching. Extroverts enjoy people watching
        <cite> - Jonny Sun</cite>
      </blockquote>
      <h2>Are you Introvert or Extrovert?</h2>
      <Button
        label={`Let's Evaluate`}
        onClick={() => navigate("/questionnaire")}
      />
    </div>
  );
};
