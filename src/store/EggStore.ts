import { createSlice } from '@reduxjs/toolkit';
import { type Item } from '../data/items';

interface EggState extends Item {
    star: number;
    colorMax: number;
    fillTimes: number;
    maxSolutions: number;
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
        fillTimes: 3,
        maxSolutions: 500,
    } as EggState,
    reducers: {
        changeBasic: (state, action) => {
            if (action.payload.star) {
                const star = action.payload.star;
                state.colorMax = Math.min(100 * star, 500);
                action.payload.fillTimes = star == 6 ? 12 : 4 + star;
            }
            Object.assign(state, action.payload);
            console.log(action);
        },
    },
});

export default EggStore.reducer;

export const { changeBasic } = EggStore.actions;
