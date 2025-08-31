import api from "../../Utils/api";
import { hideLoading, showLoading } from "react-redux-loading-bar";

/**
 * Action types for user actions.
 * @readonly
 * @enum {string}
 */
const ActionType = {
  RECEIVE_USERS: "RECEIVE_USERS",
};

/**
 * Creates an action to receive users.
 * @param {Array} users - The list of users.
 * @returns {Object} The action object.
 */
function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

/**
 * Async action creator for registering a user.
 * @param {Object} param0 - User registration data.
 * @param {string} param0.name - User's name.
 * @param {string} param0.email - User's email.
 * @param {string} param0.password - User's password.
 * @returns {Function} Thunk function.
 */
function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const registeredUser = await api.register({ name, email, password });
      // Optionally, you can dispatch another action here if needed
      return registeredUser;
    } catch (error) {
      alert(error.message);
      throw error; // Rethrow for further handling if needed
    } finally {
      dispatch(hideLoading());
    }
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
