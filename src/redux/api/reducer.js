import { actionTypes } from './actions';

export const initialState = {
  listApi: [],
  limitPage: 3,
  totalPages: 1,
  isLoadingListApi: true,
  noticeHandleApiSuccess: false,
};
export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FILTER_API_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        isLoadingListApi: false,
        listApi: data,
        totalPages: Math.ceil(data.length / initialState.limitPage),
      };
    }
    case actionTypes.FILTER_API_FAILED: {
      return {
        ...state,
        isLoadingListApi: false,
        listApi: [],
      };
    }
    case actionTypes.GET_DATA_API: {
      return {
        ...state,
      };
    }

    case actionTypes.HANDLE_API_SUCCESS: {
      return {
        ...state,
        noticeHandleApiSuccess: action.payload,
      };
    }

    default:
      return state;
  }
}
