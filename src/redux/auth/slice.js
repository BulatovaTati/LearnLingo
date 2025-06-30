import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, registerUser } from './operations';

const initialState = {
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(registerUser.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.isLoggedIn = true;
                state.user = payload;
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(logIn.pending, state => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(logIn.fulfilled, (state, { payload }) => {
                console.log('payload: ', payload);
                state.isLoading = false;
                state.error = null;
                state.isLoggedIn = true;
                state.user = payload;
            })
            .addCase(logIn.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(logOut.fulfilled, state => {
                state.error = null;
                state.isLoggedIn = false;
                state.user = null;
            })
            .addCase(logOut.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
                state.error = null;
            })
            .addCase(refreshUser.fulfilled, (state, { payload }) => {
                state.isRefreshing = false;
                state.error = null;
                if (payload) {
                    state.isLoggedIn = true;
                    state.user = payload;
                    state.isLoading = false;
                }
            })
            .addCase(refreshUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isRefreshing = false;
                state.isLoggedIn = false;
                state.error = payload;
            });
    },
});

export const authReducer = authSlice.reducer;
