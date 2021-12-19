import { combineReducers } from "redux";
import * as reducer from "./reducers";

const reducers = combineReducers({
  mode: "development",
  ui: reducer.uiReducer,
  chart: reducer.chartReducer,
});

export default reducers;
