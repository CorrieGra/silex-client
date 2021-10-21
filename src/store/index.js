import clues from '../clues.json';
import { action, createStore, persist } from 'easy-peasy';

export const store = createStore(
    persist({
        clues,
        currentClue: 0,
        score: 0,
        updateScore: action((state, score) => {
            state.score += score;
        }),
        nextClue: action((state) => {
            state.currentClue += 1;
        })
    })
);
