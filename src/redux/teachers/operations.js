import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase';
import { ref, query, get } from 'firebase/database';

const collectionRef = ref(db, 'teachers');

export const fetchTeachers = createAsyncThunk('teachers/fetchTeachers', async (_, thunkAPI) => {
    try {
        const teachersQuery = query(collectionRef);
        const teachersSnapshot = await get(teachersQuery);
        const data = teachersSnapshot.exists() ? Object.values(teachersSnapshot.val()) : [];

        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const fetchTeachersByFilter = createAsyncThunk('teachers/fetchTeachersByFilter', async (filters = {}, { rejectWithValue }) => {
    try {
        const teachersRef = ref(db, 'teachers');
        const snapshot = await get(teachersRef).catch(err => {
            throw err;
        });

        let teachers = snapshot.exists() ? Object.values(snapshot.val()) : [];

        if (filters.lang?.value) {
            teachers = teachers.filter(t => (t.languages || []).some(l => l.toLowerCase() === filters.lang.value.toLowerCase()));
        }

        if (filters.level?.label) {
            teachers = teachers.filter(t => (t.levels || []).includes(filters.level.label));
        }

        if (filters.price?.label) {
            const [min, max] = filters.price.label
                .replace('$', '')
                .split('-')
                .map(s => Number(s.trim()));
            teachers = teachers.filter(t => t.price_per_hour >= min && t.price_per_hour <= max);
        }

        return teachers;
    } catch (err) {
        return rejectWithValue(err.message || 'Failed to load teachers');
    }
});
