import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import feedReducer from "./Feedslice";
import FriendsReducer from "./FriendsSlice";
import RequestReducer from "./RequestSlice";
const Appstore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    friends: FriendsReducer,
    request: RequestReducer,
  },
});

export default Appstore;
