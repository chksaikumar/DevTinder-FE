import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import feedReducer from "./Feedslice";
const Appstore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
  },
});

export default Appstore;
