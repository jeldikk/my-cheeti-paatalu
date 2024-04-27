const { Card } = require("flowbite-react");

function SummaryTile({ title, subTitle, label }) {
  return (
    <Card className="w-full">
      <h2>{title}</h2>
      <span>{subTitle}</span>
      <hr />
      <h3>{label}</h3>
    </Card>
  );
}

export default SummaryTile;
