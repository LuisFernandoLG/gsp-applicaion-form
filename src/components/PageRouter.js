import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "../helpers/routes";
import NavBar from "./NavBar";
import ApplicationsPage from "./routes/ApplicationsPage";
import FormPage from "./routes/FormPage";
import HomePage from "./routes/HomePage";
import PageNotFoundPage from "./routes/PageNotFoundPage";

export const PageRouter = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path={routes.FORM_PAGE} component={FormPage} />
        <Route path={routes.APPLICATIONS_PAGE} component={ApplicationsPage} />
        <Route exact path={routes.HOME_PAGE} component={HomePage} />
        <Route path={routes.NOT_FOUND_PAGE} component={PageNotFoundPage} />
      </Switch>
    </Router>
  );
};
