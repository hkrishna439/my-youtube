import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videosInfo",
  initialState: {
    info: null,
  },
  reducers: {
    storeInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { storeInfo } = videosSlice.actions;

export default videosSlice.reducer;
