import DateTimeRangePicker from "./date-time-range-picker/DateTimeRangePicker";

function App() {
  function onChange(startTime, endTime) {
    console.log(startTime, endTime);
  }

  return (
    //2600, 56
    <div className="flex h-[500px] w-full flex-col bg-violet-100">
      {[...Array(3)].map((_, i) => (
        <div key={i}>{i}</div>
      ))}

      <DateTimeRangePicker
        className="flex justify-center"
        onChange={onChange}
        onClick={() => {
          console.log("haha");
        }}
      >
        <input className="w-48 border px-1" />
      </DateTimeRangePicker>
      {/*<RangePicker format="YYYY-MM-DD HH:mm" showTime={{ format: "HH:mm" }} placeholder={["시작 날짜", "종료 날짜"]} />*/}
    </div>
  );
}

export default App;
