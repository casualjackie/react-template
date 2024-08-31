import { configureStore } from "@reduxjs/toolkit";
import app from "./app/reducer";

const rootReducer = { app };

// `initStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request state pollution.
const initStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  });
};

export const store = initStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof initStore>;
export type AppDispatch = AppStore["dispatch"];
