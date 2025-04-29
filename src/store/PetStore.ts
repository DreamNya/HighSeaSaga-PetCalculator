import { createSlice } from '@reduxjs/toolkit';
import { type Pet, PetName, pets } from '../data/pets';
import { color, colorNames, Colors, type Item } from '../data/items';

export type Solutions = {
    possiblePets: Array<PetName>;
    itemCombo: Array<string>;
    color: colorNames;
};

export interface PetState {
    targetPet: Pet;
    solutions: Array<Solutions>;
    errorText: string;
}

export const PetStore = createSlice({
    name: 'Pet',
    initialState: {
        targetPet: pets['波波洛利'],
        solutions: [],
        errorText: '',
    } as PetState,
    reducers: {
        changePet: (state, action) => {
            state.targetPet = pets[action.payload];
            // 清除旧错误提示、结果
            state.errorText = '';
            state.solutions = [];
        },
        throwError: (state, action) => {
            state.errorText = action.payload ? '错误：' + action.payload : '';
        },

        changeSolution: (state, action) => {
            state.solutions = action.payload;
        },
    },
});

export default PetStore.reducer;

export const { changePet, throwError, changeSolution } = PetStore.actions;

export const sumColor = (arr: Array<Item>) => {
    return arr.reduce(
        (obj, itemValues) => {
            (Object.entries(itemValues) as Array<[keyof Item, number]>).forEach(([item, value]) => {
                obj[item] += value;
            });
            return obj;
        },
        {
            green: 0,
            blue: 0,
            yellow: 0,
            red: 0,
            purple: 0,
            black: 0,
            time: 0,
        },
    );
};

export const validPets = (colorValue: Record<keyof Pet['colors'], number>) => {
    const possiblePets = Object.values(pets)
        // 去除必定可能的波波洛利
        .slice(1)
        .reduce((arr, { name, colors }) => {
            const valid = (Object.keys(Colors) as Array<color>).every((color) => {
                return colorValue[color] >= colors[color]?.min && colorValue[color] <= colors[color]?.max;
            });
            if (valid) {
                arr.push(name);
            }
            return arr;
        }, [] as Array<Pet['name']>);
    return possiblePets;
};
