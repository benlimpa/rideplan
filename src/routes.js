import {configureRoutes} from "pawjs/src/utils/bundler";
// routes
import * as Home from "./pages/home";
import * as MyPlans from "./pages/myplans";

export default configureRoutes([
  Home,
  MyPlans
]);