import axios from 'axios';
import { action, createStore, persist, thunk } from 'easy-peasy';

// for easy persistence through sessions you can surround your store object 
// with persist();
export const store = createStore(
    persist({
        clues: [],
        currentClue: 0,
        score: 0,
        updateClues: action((state, clues) => {
            state.clues.push(...clues);
        }),
        getClues: thunk(async (actions) => {
            const { data } = await axios({
                url: `https://jservice.io/api/clues`,
                method: 'GET'
            });

            actions.updateClues(data);
        }),
        updateScore: action((state, score) => {
            state.score += score;
        }),
        nextClue: action((state) => {
            state.currentClue += 1;
        })
    })
);
