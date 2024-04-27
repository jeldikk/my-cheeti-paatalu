"use client";

import { CheetiPaataContext } from "@/context/cheeti-paata-detail.context";
import { Card } from "flowbite-react";
import { useContext } from "react";
import SummaryTile from "./_components/summary-tile";

function SummaryPage() {
  const cheetiPaataContext = useContext(CheetiPaataContext);
  const summary = cheetiPaataContext.generateSummary();
  console.log({ summary });
  return (
    <div className="summary">
      <Card>
        <h1 className="text-4xl">Summary</h1>
        <div className="w-full mx-auto grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <SummaryTile
            title={"Payments Made"}
            subTitle={"Number of Payments since ##/## out of ## months"}
            label={summary.paymentsCount}
          />
          <SummaryTile
            title={"Remaining Months"}
            subTitle={"Number of months left in this cheeti"}
            label={summary.remaining}
          />
          <SummaryTile
            title={"Total Count"}
            subTitle={"Tenure of Cheeti Paata"}
            label={summary.totalCount}
          />
          <SummaryTile
            title={"Previous Premium"}
            subTitle={"Your share for previous month cheeti payment"}
            label={summary.previousAmount}
          />
        </div>
      </Card>
    </div>
  );
}

export default SummaryPage;
