function CheetiPaataCard({ cheetiPaata }) {
  const {
    cheetiName,
    cheetiValue,
    cheetiTenure,
    managerName,
    cheetiStartMonth,
    cheetiStartYear,
    isClosed,
  } = cheetiPaata;
  return (
    <div className="cheeti-paata-card w-full">
      <Card className="w-full border rounded-md"></Card>
    </div>
  );
}

export default CheetiPaataCard;
