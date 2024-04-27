"use client";
import { CheetiPaataContext } from "@/context/cheeti-paata-detail.context";
import Link from "next/link";
import { Tabs } from "flowbite-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import {
  HiUserCircle,
  HiAdjustments,
  HiClipboardList,
  HiHome,
} from "react-icons/hi";

const TABSTATE = [
  {
    match: "",
    display: "Home",
    icon: HiHome,
    name: "home",
  },
  {
    match: "payment",
    display: "Add Payment",
    icon: HiUserCircle,
    name: "add-payment",
  },
  {
    match: "summary",
    display: "Summary",
    icon: HiClipboardList,
    name: "summary",
  },
  {
    match: "analysis",
    display: "Analysis",
    icon: HiAdjustments,
    name: "analysis",
  },
];

function MenuTabs() {
  //   const cheetiPaata = useContext(CheetiPaataContext);
  //   console.log({ cheetiPaata });
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [activeTab, setActiveTab] = useState({});
  //   //   const [parentRoute, setParentRout]
  console.log({ pathname, params, router });
  //   console.log({ pathname, activeTab });

  useEffect(() => {
    console.log({ pathname, params });
    const splittedPath = pathname.split("/");
    const variant = splittedPath.pop();
    if (variant === params.cheetiId) {
    } else {
      const selectedTab = TABSTATE.find((t) => t.match === variant);
      setActiveTab(selectedTab);
    }
  }, [pathname, params]);

  const handleTabClick = (tabIndex) => {
    console.log({ tabIndex });
    const selectedTab = TABSTATE[tabIndex];
    if (activeTab.name !== selectedTab.name) {
      setActiveTab(activeTab);
      router.push(`/cheeti-paatalu/${params.cheetiId}/${selectedTab.match}`);
    }
  };
  return (
    <Tabs
      aria-label="Menu Tabs"
      style="pills"
      onActiveTabChange={handleTabClick}
    >
      {TABSTATE.map((item) => (
        <Tabs.Item key={item.name} title={item.display} icon={item.icon}>
          {}
        </Tabs.Item>
      ))}
    </Tabs>
  );
}

export default MenuTabs;
