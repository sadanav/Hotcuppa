import { configureStore } from "@reduxjs/toolkit";
import coffeeList from "./coffeeList";

export const store = configureStore({
  reducer: {
    coffeeList,
  },
});
