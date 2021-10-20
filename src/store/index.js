import axios from 'axios';
import clues from '../clues.json';
import { action, createStore } from 'easy-peasy';

export const store = createStore({
    clues,
});
