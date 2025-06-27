import { createAsyncThunk } from '@reduxjs/toolkit';
import { onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { get, ref, set } from 'firebase/database';

export const registerUser = createAsyncThunk('auth/register', async ({ name, email, password }, { rejectWithValue }) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(user, { displayName: name });
        await set(ref(db, `users/${user.uid}`), {
            name,
            email: user.email,
            createdAt: new Date().toISOString(),
        });

        return { uid: user.uid, name, email: user.email };
    } catch (error) {
        return rejectWithValue(error.code || error.message);
    }
});

export const logIn = createAsyncThunk('auth/login', async ({ email, password }, { rejectWithValue }) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);

        const snap = await get(ref(db, `users/${user.uid}`));
        return snap.val();
    } catch (error) {
        return rejectWithValue(error.code || error.message);
    }
});

export const logOut = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
    try {
        await signOut(auth);
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, { rejectWithValue }) => {
    try {
        const user = await new Promise(res => {
            const unsub = onAuthStateChanged(auth, u => {
                unsub();
                res(u);
            });
        });
        if (!user) return null;
        const snap = await get(ref(db, `users/${user.uid}`));
        return snap.val();
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
