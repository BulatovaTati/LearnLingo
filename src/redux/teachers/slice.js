import { createSlice } from '@reduxjs/toolkit';
import { fetchTeachers, fetchTeachersByFilter } from './operations';

const initialState = {
    items: [],
    favoriteItems: [],
    visibleTeachers: 3,
    isLoader: false,
    error: null,
};

const teachersSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {
        addAndRemoveFavoriteTeacher: (state, action) => {
            const teacher = action.payload;
            const index = state.favoriteItems.findIndex(t => t.id === teacher.id);
            if (index !== -1) {
                state.favoriteItems.splice(index, 1);
            } else {
                state.favoriteItems.push(teacher);
            }
        },
        changeVisibleTeachers: (state, { payload }) => {
            state.visibleTeachers = payload;
        },
        resetFavorites: state => {
            state.favoriteItems = [];
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTeachers.pending, state => {
                state.isLoader = true;
            })
            .addCase(fetchTeachers.fulfilled, (state, { payload }) => {
                state.isLoader = false;
                state.items = payload;
            })
            .addCase(fetchTeachers.rejected, (state, { payload }) => {
                state.isLoader = false;
                state.error = payload;
            })
            .addCase(fetchTeachersByFilter.pending, state => {
                state.visibleTeachers = 3;
                state.isLoader = true;
                state.items = [];
            })
            .addCase(fetchTeachersByFilter.fulfilled, (state, { payload }) => {
                state.isLoader = false;
                state.items = payload;
            })
            .addCase(fetchTeachersByFilter.rejected, (state, { payload }) => {
                state.isLoader = false;
                state.error = payload;
            });
    },
});

export const { addAndRemoveFavoriteTeacher, changeVisibleTeachers, resetFavorites } = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
