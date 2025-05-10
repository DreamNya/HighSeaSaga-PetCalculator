import { createSlice } from '@reduxjs/toolkit';
import { type Item } from '../data/items';

interface EggState extends Item {
    star: number;
    colorMax: number;
    fillTimes: number;
    maxSolutions: number;
    starUp: number;
}

export const EggStore = createSlice({
    name: 'EggStore',
    initialState: {
        green: 0,
        blue: 0,
        yellow: 0,
        red: 0,
        purple: 0,
        black: 0,
        star: 1,
        colorMax: 100,
        fillTimes: 5,
        maxSolutions: 500,
        starUp: 0,
    } as EggState,
    reducers: {
        changeBasic: (state, action) => {
            if ('star' in action.payload) {
                const { star } = action.payload;
                action.payload.starUp = 0;
                state.colorMax = Math.min(100 * star, 500);
                action.payload.fillTimes = star == 6 ? 12 : 4 + star;
            } else if ('starUp' in action.payload) {
                const { starUp } = action.payload;
                const { star } = state;
                state.colorMax = Math.min(100 * (star + starUp), 500);
            }

            Object.assign(state, action.payload);
            console.log(action);
        },
    },
});

export default EggStore.reducer;

export const { changeBasic } = EggStore.actions;
