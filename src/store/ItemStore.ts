import { createSlice } from '@reduxjs/toolkit';
import { eggItems, powerUps, type itemName } from '../data/items';
import { store } from '../store';

let timer: number | undefined = undefined;
const SaveStorage = () => {
    localStorage.setItem('HSSDPC_ItemStore', JSON.stringify(store.getState().ItemStore));
};

export const loadStorage = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const load = JSON.parse(localStorage.getItem('HSSDPC_ItemStore')) ?? {
        powerUps: Object.keys(powerUps),
        eggItems: Object.keys(eggItems),
    };
    Object.entries(load).forEach(([name, value]) => {
        store.dispatch(_changeItem({ name, value }));
    });
};

export const ItemStore = createSlice({
    name: 'ItemStore',
    initialState: {
        powerUps: [],
        eggItems: [],
        otherItems: [],
        equipments: [],
    } as Record<string, Array<itemName>>,
    reducers: {
        _changeItem: (state, action) => {
            const { value, name } = action.payload;
            state[name] = value;
        },
        changeItem: (state, action) => {
            const { value, name } = action.payload;
            state[name] = value;
            clearTimeout(timer);
            timer = setTimeout(() => SaveStorage(), 10000);
        },
    },
});

export default ItemStore.reducer;

export const { changeItem } = ItemStore.actions;
const { _changeItem } = ItemStore.actions;
