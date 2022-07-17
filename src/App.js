import { useState } from "react";
import "./App.css";
import FeebackList from "./components/FeebackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeebackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
