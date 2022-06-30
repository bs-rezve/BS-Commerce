import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";

import "react-datepicker/dist/react-datepicker.css";
const DateTimeFilter: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState("10:00");
  return (
    <>
      <div className="row">
        <div className="col-md-6 col-lg-3 col-xl-3">
          <div className="row" style={{ paddingLeft: "20px" }}>
            <span className="col-3">Start Date:</span>
            <span className="col-9">
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                maxDate={new Date()}
              />
            </span>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3">
          <div className="row" style={{ paddingLeft: "20px" }}>
            <span className="col-3">Start Time:</span>
            <span className="col-9">
              <DatePicker
                onChange={(e: any) => setStartTime(e.target)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </span>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3">
          <label
            style={{
              ["fontSize" as any]: "17px",
              ["marginRight" as any]: "5px",
            }}
          >
            End Date:
          </label>
          <input
            type="date"
            id="start"
            name="trip-start"
            min="2018-01-01"
            max="2018-12-31"
            style={{ ["width" as any]: "70%", ["padding" as any]: "10px" }}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3">
          <label
            style={{
              ["fontSize" as any]: "17px",
              ["marginRight" as any]: "5px",
            }}
          >
            End Date:
          </label>
          <input
            type="time"
            id="start"
            name="trip-start"
            min="2018-01-01"
            max="2018-12-31"
            style={{ ["width" as any]: "70%", ["padding" as any]: "10px" }}
          />
        </div>
      </div>
    </>
  );
};

export default DateTimeFilter;
