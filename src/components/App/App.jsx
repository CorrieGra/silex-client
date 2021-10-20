import { useStoreState, useStoreActions } from 'easy-peasy';
import { useEffect, useState } from 'react';

function App() {
  const clues = useStoreState((state) => state.clues);
  const [isCorrect, setIsCorrect] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');

  const currentQuestion = 0;

  const validateAnswer = (e, userAnswer, correctAnswer) => {
    e.preventDefault();
    if (correctAnswer.match(userAnswer) && userAnswer !== '.*') setIsCorrect(true);
    else setIsCorrect(false);
  };



  return (
    <div className="App">
      <div className="">
          <h2 className="question">
            { clues[currentQuestion].question }
          </h2>
        <form action="">
          <div className="input__group">
            <label htmlFor="answer" />
            <input text="text" placeholder="Please provide your answer" value={ userAnswer } onChange={ (e) => setUserAnswer(e.target.value) } />
          </div>
          <div>
            {
              isCorrect ? (<span>Your answer is correct !</span>) : (<span>Your answer is not correct !</span>)
            }
          </div>
          <div className="input__cta">
            <button type="submit" onClick={ (e) => validateAnswer(e, userAnswer, clues[currentQuestion].answer) }>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
