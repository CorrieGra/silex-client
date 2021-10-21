import { useStoreState, useStoreActions, useStoreRehydrated } from 'easy-peasy';
import { useEffect, useState } from 'react';

function App() {
  const clues = useStoreState((state) => state.clues);
  const score = useStoreState((state) => state.score);
  const currentClue = useStoreState((state) => state.currentClue);

  const updateScore = useStoreActions((actions) => actions.updateScore);
  const nextClue = useStoreActions((actions) => actions.nextClue);
  const getClues = useStoreActions((actions) => actions.getClues);

  const isRehydrated = useStoreRehydrated();
  const [isCorrect, setIsCorrect] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');

  useEffect(() => { getClues() }, []);

  const isEmpty = (strng) => !strng.replace(' ');

  const validateAnswer = (e, userAnswer, correctAnswer) => {
    e.preventDefault();
    if (correctAnswer.toLocaleLowerCase().match(userAnswer.toLocaleLowerCase()) && userAnswer !== '.*' && !isEmpty(userAnswer)) {
      setIsCorrect(true); 
      setUserAnswer('');
      nextClue();
      updateScore(clues[currentClue].value);
    }
    else setIsCorrect(false);
  };

  return isRehydrated ? (
    <div className="App">
      <div className="">
          <h1>Score: { score }</h1>
          <h2 className="question">
            { clues[currentClue]?.question }
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
            <button type="submit" onClick={ (e) => validateAnswer(e, userAnswer, clues[currentClue].answer) }>Submit</button>
          </div>
        </form>
      </div>
    </div>
  ) : (<span>Loading...</span>);
}

export default App;
