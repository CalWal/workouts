import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Legs from "./Workouts/Legs/Legs";
import Arms from "./Workouts/Arms/Arms";
import Back from "./Workouts/Back/Back";
import Chest from "./Workouts/Chest/Chest";
import Shoulders from "./Workouts/Shoulders/Shoulders";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

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

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <Route path="/chest/" component={Chest} />
        <Route path="/back/" component={Back} />
        <Route path="/legs/" component={Legs} />
        <Route path="/arms/" component={Arms} />
        <Route path="/shoulders/" component={Shoulders} />
      </div>
    </Router>
  );
}

export default AppRouter;
