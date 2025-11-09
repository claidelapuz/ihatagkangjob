import { useState } from 'react'

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Jane Austen"],
    answer: "Harper Lee"
  }
];

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === quizQuestions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < quizQuestions.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">Quiz Generator</h1>
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">
              Your score: {score} / {quizQuestions.length}
            </h2>
            <button
              onClick={handleRestart}
              className="mt-4 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-medium mb-4 text-gray-800">{quizQuestions[current].question}</h2>
            <div className="flex flex-col gap-3 mb-4">
              {quizQuestions[current].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="text-gray-500 text-sm text-right">
              Question {current + 1} of {quizQuestions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App