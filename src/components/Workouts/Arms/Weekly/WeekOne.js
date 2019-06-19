import React from "react";
import ExerciseOne from "../Exercises/ExceriseOne";
import Exercise from "../Exercises/Exercise";
import "./Weekly.css";

class ArmsOne extends React.Component {
  state = {
    CloseGripBenchPress: "",
    Dips: "",
    SkullCrushers: "",
    RopePushdown: "",
    DbCurls: "",
    BbCurls: "",
    HammerCurls: ""
  };
  render() {
    return (
      <div>
        <div className="Odd">
          <ExerciseOne />
        </div>

        <div className="Even">
          <Exercise
            exercise="Two"
            name="Skull Crushers"
            sets="3"
            reps="10"
            rest="30 Seconds"
          />
        </div>
        <div className="Odd">
          <Exercise
            exercise="Three"
            name="Dips"
            sets="4"
            reps="10"
            rest="60 Seconds"
          />
        </div>
        <div className="Even">
          <Exercise
            exercise="Four"
            name="Rope Pushdown"
            sets="4"
            reps="10"
            rest="60 Seconds"
          />
        </div>
        <div className="Odd">
          <Exercise
            exercise="Five"
            name="DB Curls"
            sets="4"
            reps="10"
            rest="60 Seconds"
          />
        </div>
        <div className="Even">
          <Exercise
            exercise="Six"
            name="BB Curls"
            sets="3"
            reps="10"
            rest="30 Seconds"
          />
        </div>
        <div className="Odd">
          <Exercise
            exercise="Seven"
            name="DB Hammer Curls"
            sets="3"
            reps="10"
            rest="30 Seconds"
          />
        </div>
      </div>
    );
  }
}

export default ArmsOne;
