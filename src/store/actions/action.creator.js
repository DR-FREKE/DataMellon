import { LOADING, ERROR_OCCURED, FILTER_DATA } from "./action.types";
import { sendRequest } from "../../api/request.api";
import filterData from "../../utils/Filter";

/** the postAction is action for making post request to the endpoint;
 * you could have the other three types of action methods (getAction, updateAction, deleteAction).
 *
 * I used dependency injection incase we need to have a different type of request or want to do test (main reason)
 * when we want to do test the dependency injection will help avoid waiting for the server to respond before
 * we can proceed */
export const postAction =
  (type, app_data = null, fetchFn = sendRequest) =>
  async dispatch => {
    dispatch({ type: LOADING });
    try {
      const { data } = await fetchFn(app_data);
      dispatch({ type, payload: { data } });
    } catch (error) {
      dispatch({ type: ERROR_OCCURED, payload: error.message });
    }
  };

export const filterAction =
  (data_array, app_data = null, filterFn = filterData) =>
  async dispatch => {
    dispatch({ type: LOADING });
    try {
      const { data } = filterFn(data_array, app_data);
      dispatch({ type: FILTER_DATA, payload: { data } });
    } catch (error) {
      dispatch({ type: ERROR_OCCURED, payload: error.message });
    }
  };
