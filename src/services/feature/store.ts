import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import assetReducer from './profiles/slice';
import watchAsset from './profiles/saga';
import { PERSIST_KEY, PERSIST_VERSION } from '../../utils/constants/store';

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(
    {
        key: PERSIST_KEY,
        version: PERSIST_VERSION,
        storage,
    },
    assetReducer,
);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(sagaMiddleware),
});

sagaMiddleware.run(watchAsset);

export type AppState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export default store;
