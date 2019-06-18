import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Legs from "./Workouts/Legs/Legs";
import Arms from "./Workouts/Arms/Arms";
import ArmsOne from "./Workouts/Arms/Weekly/WeekOne";
import Back from "./Workouts/Back/Back";
import Chest from "./Workouts/Chest/Chest";
import Shoulders from "./Workouts/Shoulders/Shoulders";

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/chest/">Chest</Link>
            </li>
            <li>
              <Link to="/back/">Back</Link>
            </li>
            <li>
              <Link to="/legs/">Legs</Link>
            </li>
            <li>
              <Link to="/arms/">Arms</Link>
            </li>
            <li>
              <Link to="/shoulders/">Shoulders</Link>
            </li>
          </ul>
        </nav>
        {/*Main Routing */}
        <Route path="/chest/" component={Chest} />
        <Route path="/back/" component={Back} />
        <Route path="/legs/" component={Legs} />
        <Route path="/arms/" component={Arms} />
        <Route path="/shoulders/" component={Shoulders} />
        {/*Arms Routing */}
        <Route path="/arms1/" component={ArmsOne} />
      </div>
    </Router>
  );
}

export default AppRouter;
