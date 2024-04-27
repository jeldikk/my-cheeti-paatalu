// "use client";
// import { useState, useContext } from "react";
// import { useSession } from "next-auth/react";
// import { CheetiPaataContext } from "@/context/cheeti-paata-detail.context";
// import CheetiPaataPayment from "./payment";
// import { Tabs } from "flowbite-react";
// import { HiUserCircle, HiAdjustments, HiPlusCircle } from "react-icons/hi";
// import CheetiSummary from "./summary";

// function CheetiPaataDetailPage() {
//   // const session = useSession();
//   // const CheetiPaataContext = useCheetiPaataContext();
//   const cheetiPaataContext = useContext(CheetiPaataContext);
//   const [chosenTab, setChosenTab] = useState("summary");

//   console.log({ chosenTab, cheetiPaataContext });

//   const setActiveTab = (tab) => {
//     console.log({ tab });
//     setChosenTab(tab);
//   };

//   return (
//     <div className="cheeti-paata-details">
//       <div className="tabs-container">
//         <Tabs
//           aria-label="Cheeti Paata operations Tab"
//           onActiveTabChange={(tab) => setActiveTab(tab)}
//         >
//           <Tabs.Item
//             active={chosenTab === "payment"}
//             title="Add Payment"
//             icon={HiPlusCircle}
//           >
//             <CheetiPaataPayment />
//           </Tabs.Item>
//           <Tabs.Item active={chosenTab === "summary"} title="Summary">
//             <CheetiSummary />
//           </Tabs.Item>
//           <Tabs.Item
//             active={chosenTab === "analysis"}
//             title="Analysis"
//             icon={HiAdjustments}
//           >
//             This is{" "}
//             <span className="font-medium text-gray-800 dark:text-white">
//               Settings tab's associated content
//             </span>
//             . Clicking another tab will toggle the visibility of this one for
//             the next. The tab JavaScript swaps classes to control the content
//             visibility and styling.
//           </Tabs.Item>
//         </Tabs>
//       </div>
//     </div>
//   );
// }

function CheetiPaataDetailPage() {
  return <div className="cheeti-paata-detail">this is the default page</div>;
}

export default CheetiPaataDetailPage;
