import {
  LOADING,
  SEND_TEST,
  ERROR_OCCURED,
  FILTER_DATA,
} from "../actions/action.types";

const initialState = {
  loading: false,
  error: false,
  filtering: false,
};

const postChartReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEND_TEST:
      return {
        ...state,
        loading: false,
        filtering: false,
        data: action.payload.data,
      };
    case FILTER_DATA:
      return {
        ...state,
        loading: false,
        filtering: true,
        filtered_data: action.payload.data,
      };
    case ERROR_OCCURED:
      return {
        ...state,
        loading: false,
        error: true,
        error_msg: action.payload,
      };
    default:
      return state;
  }
};

export default postChartReducer;
