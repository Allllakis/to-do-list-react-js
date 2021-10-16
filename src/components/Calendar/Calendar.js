import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.module.css";
import moment from "moment";
import classes from "./Calendar.module.css";

export default function App() {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };
  return (
    <>
      <div className={classes.Calendar}>
        <Calendar
          locale="en-GB"
          className={classes.Calendar1}
          value={dateState}
          onChange={changeDate}
        />
        <p>
          Current selected date is{" "}
          <b>{moment(dateState).format("MMMM Do YYYY")}</b>
        </p>
      </div>
    </>
  );
}
