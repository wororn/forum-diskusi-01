import api from "../../Utils/api"
import { hideLoading, showLoading } from "react-redux-loading-bar"

const ActionType = {
    RECEIVE_DETAIL_THREAD: 'RECEIVE_DETAIL_THREAD',
    CLEAR_DETAIL_THREAD: 'CLEAR_DETAIL_THREAD',
    ADD_COMMENT: 'ADD_COMMENT',
}

function receiveDetailThreadActionCreator(detailThread) {
    return {
        type: ActionType.RECEIVE_DETAIL_THREAD,
        payload: {
            detailThread
        }
    }
}

function clearDetailThreadActionCreator() {
    return {
        type: ActionType.CLEAR_DETAIL_THREAD
    }
}

function asyncReceiveMemoDetail(threadId) {
    return async (dispatch) => {
        dispatch(showLoading())
        try {
            const detailThread = await api.getThreadDetail(threadId)
            dispatch(receiveDetailThreadActionCreator(detailThread))
        } catch (error) {
            alert(error.message)
        }
        dispatch(hideLoading())
    }
}


export {
    ActionType,
    receiveDetailThreadActionCreator,
    clearDetailThreadActionCreator,
    asyncReceiveMemoDetail,
}