import {getAllUsers,getAllThreads,getAllLeaderboards} from "../../Utils/api";
import { receiveBillboardsActionCreator } from "../BillBoard/action.js";
import { receiveUsersActionCreator } from "../User/action.js";
import { receiveStreamActionCreator } from "../Stream/action.js";
import { showLoading, hideLoading } from "react-redux-loading-bar";

/**
 * Async action to populate users, threads, and leaderboards.
 * Dispatches loading state and handles errors gracefully.
 */
function asyncPopulateUsersThreadsLeaderboards() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const [users, threads, leaderboards] = await Promise.all([
        getAllUsers(),
        getAllThreads(),
        getAllLeaderboards(),
      ]);

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveStreamActionCreator(threads));
      dispatch(receiveBillboardsActionCreator(leaderboards));
    } catch (error) {
      alert(`Failed to load data: ${error.message}`);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export { asyncPopulateUsersThreadsLeaderboards };
