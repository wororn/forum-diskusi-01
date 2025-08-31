import api from "../../Utils/api";
import { hideLoading, showLoading } from "react-redux-loading-bar";

/**
 * Action types for thread stream actions.
 */
const ActionType = {
  RECEIVE_THREADS: "RECEIVE_THREADS",
  ADD_THREAD: "ADD_THREAD",
  UP_VOTE_THREAD: "UP_VOTE_THREAD",
};

/**
 * Creates an action to receive threads.
 * @param {Array} threads
 */
function receiveStreamActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: { threads },
  };
}

/**
 * Creates an action to add a thread.
 * @param {Object} thread
 */
function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: { thread },
  };
}

/**
 * Creates an action to upvote a thread.
 * @param {Object} param0
 */
function upVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: { threadId, userId },
  };
}

/**
 * Async action to add a thread.
 * @param {Object} param0
 */
function asyncAddThread({ title, body, category = "" }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      console.error(error);
      alert(error.message);
      // TODO: dispatch error action for better UX
    } finally {
      dispatch(hideLoading());
    }
  };
}

/**
 * Async action to upvote a thread.
 * @param {string} threadId
 */
function asyncUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      console.error(error);
      alert(error.message);
      // Revert optimistic update
      dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  receiveStreamActionCreator,
  addThreadActionCreator,
  upVoteThreadActionCreator,
  asyncAddThread,
  asyncUpVoteThread,
};
