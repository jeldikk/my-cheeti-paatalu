import { useCheetiPaataContext } from "@/context/cheeti-paata.hook";

const { CheetiPaataContext } = require("@/context/cheeti-paata-detail.context");
const { useContext } = require("react");

function CheetiSummary() {
  //   const cheetiContext = useContext(CheetiPaataContext);
  const cheetiContext = useCheetiPaataContext();
  console.log({ cheetiContext });
  const summary = cheetiContext.generateSummary();

  return (
    <div className="cheeti-summary">
      <h1>Here goes the summary of cheeti paata with tiles</h1>
    </div>
  );
}

export default CheetiSummary;
