import { createSlice } from '@reduxjs/toolkit';

const initialState = { lang: '', level: '', price: '' };

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        resetFilters: () => initialState,
    },
});

export const { changeFilter, resetFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
