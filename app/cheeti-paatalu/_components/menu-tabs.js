"use client";
import { CheetiPaataContext } from "@/context/cheeti-paata-detail.context";
import Link from "next/link";
import { Tabs } from "flowbite-react";
import { useParams, usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { HiUserCircle, HiAdjustments, HiClipboardList } from "react-icons/hi";

function MenuTabs() {
  //   const cheetiPaata = useContext(CheetiPaataContext);
  //   console.log({ cheetiPaata });
  //   const pathname = usePathname();
  const params = useParams();
  //   const [activeTab, setActiveTab] = useState("new-payment");
  //   //   const [parentRoute, setParentRout]
  //   console.log({ pathname, params });
  //   console.log({ pathname, activeTab });
  //   const handleTabClick = (tabname) => {
  //     console.log({ tabname });
  //   };
  return (
    <Tabs
      aria-label="Menu Tabs"
      style="pills"
      //   onActiveTabChange={handleTabClick}
    >
      <Tabs.Item
        title={
          <Link href={`/cheeti-paatalu/${params.cheetiId}/payment`}>
            Add Payment
          </Link>
        }
        icon={HiUserCircle}
      >
        {}
      </Tabs.Item>
      <Tabs.Item
        title={
          <Link href={`/cheeti-paatalu/${params.cheetiId}/summary`}>
            Summary
          </Link>
        }
        icon={null}
      >
        {}
      </Tabs.Item>
      <Tabs.Item
        title={
          <Link href={`/cheeti-paatalu/${params.cheetiId}/analysis`}>
            Analysis
          </Link>
        }
        icon={HiAdjustments}
      >
        {}
      </Tabs.Item>
    </Tabs>
  );
}

export default MenuTabs;
