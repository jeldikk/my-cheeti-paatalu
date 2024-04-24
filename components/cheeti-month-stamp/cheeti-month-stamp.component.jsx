const MONTHS_LIST = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function CheetiMonthStamp(props) {
  const { startMonth, startYear } = props;
  // console.log({ startMonth, startYear });
  return (
    <div className="cheeti-month-stamp">
      <div className="text-xs">Started From (month):</div>
      <div className="font-bold">
        <span>{`${MONTHS_LIST[startMonth]}`}</span>
        {", "}
        <span>{`${startYear}`}</span>
      </div>
    </div>
  );
}

export default CheetiMonthStamp;
