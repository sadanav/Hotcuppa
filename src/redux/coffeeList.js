import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: false,
  data: [],
  error: null,
};

// Generates pending, fulfilled, and rejected action types
export const fetchCoffeeList = createAsyncThunk("user/fetchCoffeeList", async () => {
  try {
    const response = await axios.get("https://api.sampleapis.com/coffee/hot");
    return response?.data;
  } catch (error) {
    return error.message;
  }
});

const coffeeList = createSlice({
  name: "coffeeList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCoffeeList.pending, (state) => {
      state.status = true;
    });
    builder.addCase(fetchCoffeeList.fulfilled, (state, action) => {
      state.status = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCoffeeList.rejected, (state, action) => {
      state.status = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default coffeeList.reducer;
