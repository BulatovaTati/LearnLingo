import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { teachersReducer } from './teachers/slice';
import { authReducer } from './auth/slice';

const authPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['isLoggedIn'],
};

const teachersPersistConfig = {
    key: 'teachers',
    storage,
    whitelist: ['favoriteItems'],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
const teachersPersistedReducer = persistReducer(teachersPersistConfig, teachersReducer);

export const store = configureStore({
    reducer: {
        auth: authPersistedReducer,
        teachers: teachersPersistedReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
