// import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// // export const add = createAction("items/add");
// // export const remove = createAction("items/remove");
// export const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ],
//   //initialState: { items: [] },
//   reducers: {
//     add(state, action) {
//       state.push(action.payload);
//       // localStorage.setItem(
//       //   "contacts",
//       //   JSON.stringify([...state, action.payload])
//       // );
//       // return [...state, action.payload];
//     },
//     remove(state, action) {
//       // const contact = state.filter((contact) => contact.id !== action.payload);
//       // localStorage.setItem("contacts", JSON.stringify(contact));
//       return state.filter((contact) => contact.id !== action.payload);
//     },
//   },
// });
// export const filterSlice = createSlice({
//   name: "filter",
//   initialState: "",
//   reducers: {
//     filterContacts(state, action) {
//       return action.payload;
//     },
//   },
// });
// const persistConfig = {
//   key: "contacts",
//   storage,
// };
// export const persistedReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer,
//   filterSlice.reducer
// );
// export const { add, remove } = contactsSlice.actions;
// export const { filterContacts } = filterSlice.actions;
// // export const itemsReducer = createReducer([], {
// //   [add]: (state, action) => state.push(action.payload),
// //   [remove]: (state, action) =>
// //     state.filter((item) => item.id !== action.payload),
// // });
