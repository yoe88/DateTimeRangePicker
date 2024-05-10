import Actions from "./Actions";
import TimePicker from "./TimePicker";
import { useState } from "react";

const DateTimeWrapper = () => {
  //getState1
  //getState2

  return (
    <div className="flex grow flex-col">
      <div className="grow">date</div>
      <Display />
    </div>
  );
};

export default DateTimeWrapper;

function Display() {
  const [time, setTime] = useState(new Date());

  return (
    <div className="flex h-11 justify-center gap-x-7 px-6 py-2 ">
      <input className="w-full rounded border border-gray-200 px-4 text-sm text-gray-600 outline-none focus:border-blue-500" maxLength={10} defaultValue={"2024.03.05"} />
      <TimePicker />
      {/*<TimePicker showSecond={false} defaultValue={time} className="xxx" onChange={setTime} format="h:mm" inputReadOnly />*/}
    </div>
  );
}
