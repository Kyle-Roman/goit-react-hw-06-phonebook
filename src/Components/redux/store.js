import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import phonebookReducer from '../redux/reducers';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const phonebookPersistConfig = {
  key: "phonebook",
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
    reducer: {phonebook: persistReducer(phonebookPersistConfig, phonebookReducer),},
    middleware,
    devTools: process.env.NODE_ENV === 'developement',
});

const persistor = persistStore(store);

const persistedStore = { store, persistor };

export default persistedStore;