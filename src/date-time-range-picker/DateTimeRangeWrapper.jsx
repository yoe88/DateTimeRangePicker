import Actions from "./Actions";
import DateTimeWrapper from "./DateTimeWrapper";

const DateTimeRangeWrapper = () => {
  //getState1
  //getState2

  return (
    <div className="divide-y rounded-md bg-white shadow-lg outline outline-1 outline-gray-300">
      <div className="flex h-[472px] w-[630px]">
        <DateTimeWrapper />
        <DateTimeWrapper />
      </div>
      <Actions />
    </div>
  );
};

export default DateTimeRangeWrapper;
