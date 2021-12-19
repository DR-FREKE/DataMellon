import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ChartPage from "../pages/ChartPage";

const IndexRoute = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/dashboard" component={ChartPage} />
      </Switch>
    </Router>
  );
};

export default IndexRoute;
