import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import EggStoreReducer from './store/EggStore';
import PetStoreReducer from './store/PetStore';
import ItemStoreReducer from './store/ItemStore';

export const store = configureStore({
    reducer: {
        EggStore: EggStoreReducer,
        PetStore: PetStoreReducer,
        ItemStore: ItemStoreReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
