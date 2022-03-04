import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Questionnaire, Introduction, Evaluation } from "./pages";
import "./styles.css";

const Router = () => {
  const [score, setScore] = useState(0);

  const evaluateScore = (answers: number[]) => {
    const totalScore = answers.reduce((acc, current) => acc + current, 0);
    setScore(totalScore);
  };

  return (
    <Routes>
      <Route path="/" element={<Introduction />} />
      <Route
        path="questionnaire"
        element={<Questionnaire onScoreEvaluation={evaluateScore} />}
      />
      <Route path="evaluation" element={<Evaluation score={score} />} />
    </Routes>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
