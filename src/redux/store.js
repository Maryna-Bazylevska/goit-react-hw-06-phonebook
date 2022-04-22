import { configureStore } from "@reduxjs/toolkit";
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
import contacts from "./contactsReducer";
//import { persistedReducer } from "./contactsSlice";
//import { itemsReducer } from "./itemsSlice";
const persistConfigContacts = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};
const persistedReducer = persistReducer(persistConfigContacts, contacts);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    //contacts: contactsSlice.reducer,
    //items: itemsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});
export const persistor = persistStore(store);
