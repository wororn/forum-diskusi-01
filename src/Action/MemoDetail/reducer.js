import { ActionType } from "./action";

function streamDetailReducer(detailThread = null, action = {}) {
    switch (action.type) {
        case ActionType.ADD_COMMENT:
            return {
                ...detailThread,
                comments: [
                    action.payload.comment,
                    ...detailThread.comments,
                ]
            }
        case ActionType.RECEIVE_DETAIL_THREAD:
            return action.payload.detailThread;
        case ActionType.CLEAR_DETAIL_THREAD:
            return null;
        default:
            return detailThread;
    }
}

export default streamDetailReducer