import { createSlice } from "@reduxjs/toolkit";

const Requestslice = createSlice({
  name: "request",
  initialState: [],
  reducers: {
    addRequests: (state, action) => action.payload,
    removeRequests: () => [],
    removeRequestById: (state, action) =>
      state.filter((req) => req._id !== action.payload),
  },
});

export default Requestslice.reducer;
export const { addRequests, removeRequests, removeRequestById } =
  Requestslice.actions;
