export const actionTypes = {
  API_GET_DATA_API: 'API_GET_DATA_API',
  GET_LIST_API: 'GET_LIST_API',

  FILTER_SEARCH: 'FILTER_SEARCH',
  FILTER_API_SUCCESS: 'FILTER_API_SUCCESS',
  FILTER_API_FAILED: 'FILTER_API_FAILED',
  HANDLE_API_SUCCESS: 'HANDLE_API_SUCCESS',
};

export const callApiGetDataApi = (data) => {
  return {
    type: actionTypes.API_GET_DATA_API,
    payload: data,
  };
};

export const getListApi = (data) => {
  return {
    type: actionTypes.GET_LIST_API,
    payload: data,
  };
};

export const filterListApiSuccess = (data) => {
  return {
    type: actionTypes.FILTER_API_SUCCESS,
    payload: {
      data,
    },
  };
};

export const filterListApiFailed = (error) => {
  return {
    type: actionTypes.FILTER_API_FAILED,
    payload: {
      error,
    },
  };
};

export const filterApi = (data) => {
  return {
    type: actionTypes.FILTER_SEARCH,
    payload: data,
  };
};

export const fetchHandleApiSuccess = (payload) => {
  return {
    type: actionTypes.HANDLE_API_SUCCESS,
    payload,
  };
};
