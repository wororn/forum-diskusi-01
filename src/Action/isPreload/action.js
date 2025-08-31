import api from "../../Utils/api";
import { setAuthUserActionCreator } from "../Authentic/action.js";
import { hideLoading, showLoading } from "react-redux-loading-bar";

const ActionType = {
  SET_IS_PRELOAD: "SET_IS_PRELOAD",
};

/**
 * Action creator for setting preload state.
 * @param {boolean} isPreload
 */
function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

/**
 * Async process to preload user profile and set authentication state.
 */
function asyncPreloadProcess() {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(setIsPreloadActionCreator(true));
    try {
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      // If error, set authUser to null (user not authenticated)
      dispatch(setAuthUserActionCreator(null));
    } finally {
      dispatch(setIsPreloadActionCreator(false));
      dispatch(hideLoading());
    }
  };
}

export { ActionType, asyncPreloadProcess,setIsPreloadActionCreator };
