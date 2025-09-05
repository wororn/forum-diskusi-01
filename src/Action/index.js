import { configureStore } from "@reduxjs/toolkit";
import streamReducer from "./Stream/reducer";
import usersReducer from "./User/reducer";
import streamDetailReducer from "./MemoDetail/reducer";
import billboardsReducer from "./BillBoard/reducer.js";
import authUserReducer from "./Authentic/reducer";
import isPreloadReducer from "./isPreload/reducer";
import { loadingBarReducer } from "react-redux-loading-bar";
import streamCommentReducer from "./MemoComment/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    threads: streamReducer,
    users: usersReducer,
    detailThread: streamDetailReducer,
    leaderboards: billboardsReducer,
    loadingBar: loadingBarReducer,
    threadComment: streamCommentReducer,
  },
});

export default store;
