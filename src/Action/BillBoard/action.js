/**
 * Action types for billboard actions.
 * @readonly
 * @enum {string}
 */
const ActionType = Object.freeze({
  RECEIVE_BILLBOARDS: "RECEIVE_BILLBOARDS",
});

/**
 * Creates an action to receive billboards.
 * @param {Array} billboards - The list of billboard objects.
 * @returns {Object} The action object.
 */
function receiveBillboardsActionCreator(billboards) {
  return {
    type: ActionType.RECEIVE_BILLBOARDS,
    payload: {
      billboards,
    },
  };
}

export { ActionType, receiveBillboardsActionCreator };
