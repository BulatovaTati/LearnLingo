// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import { favoritesReducer } from './favorites/slice';

// const persistFavoriteReducer = persistReducer(favoritesPersistConfig, favoritesReducer);

// export const store = configureStore({
//     reducer: {
//         favorites: persistFavoriteReducer,
//     },
//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// });

// export const persistor = persistStore(store);
