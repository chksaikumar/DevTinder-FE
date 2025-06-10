import { createSlice } from "@reduxjs/toolkit";

const Friendslice = createSlice({
  name: "Friends",
  initialState: [],

  reducers: {
    addConnections: (state, action) => {
      return action.payload;
    },

    removeConnections: (state, action) => {
      return null;
    },
  },
});

export default Friendslice.reducer;
export const { addConnections, removeConnections } = Friendslice.actions;
