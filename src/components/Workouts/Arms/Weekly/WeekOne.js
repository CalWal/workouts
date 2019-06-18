import React from "react";
import ExerciseOne from "../Exercises/ExceriseOne";
import ExerciseTwo from "../Exercises/ExerciseTwo";

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
        <ExerciseOne />
        <ExerciseTwo />
      </div>
    );
  }
}

export default ArmsOne;
