import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../Utils/api";

/**
 * Action types for authentication.
 */
export const ActionType = {
  SET_AUTH_USER: "SET_AUTH_USER",
  UNSET_AUTH_USER: "UNSET_AUTH_USER",
};

/**
 * Set authenticated user action creator.
 * @param {Object} authUser
 * @returns {Object}
 */
export function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: { authUser },
  };
}

/**
 * Unset authenticated user action creator.
 * @returns {Object}
 */
export function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: { authUser: null },
  };
}

/**
 * Async action to set authenticated user.
 * @param {Object} param0
 * @param {string} param0.email
 * @param {string} param0.password
 * @returns {Function}
 */
export function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);

      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      alert(error.message);
      console.error("Login failed:", error);
      // Optionally: dispatch({ type: 'SET_AUTH_ERROR', payload: error.message });
    } finally {
      dispatch(hideLoading());
    }
  };
}

/**
 * Async action to unset authenticated user.
 * @returns {Function}
 */
export function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(unsetAuthUserActionCreator());
    api.putAccessToken("");
    dispatch(hideLoading());
  };
}
