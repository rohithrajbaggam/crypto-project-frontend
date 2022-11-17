import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import restApi from "./apis/restApis";

const middlewares = [restApi.middleware];

const store = configureStore({
  reducer: {
    [restApi.reducerPath]: restApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

setupListeners(store.dispatch);

export default store;
