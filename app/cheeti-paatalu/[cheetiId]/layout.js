import CheetiPaataCard from "@/components/cheeti-paata/cheeti-paata-card";
import authOptions from "@/lib/auth/auth.config";
import { Card } from "flowbite-react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { CheetiPaataDetailsProvider } from "@/context/cheeti-paata-detail.context";
import { SessionProvider } from "next-auth/react";
import MenuTabs from "../_components/menu-tabs";

export const metadata = {
  title: "HERE WE WILL DISPLAY NAME OF CHEETI PAATA",
  description: "Detail Page of cheeti paata is displayed on this webpage",
};

async function CheetiPaataLayout(props) {
  // console.log({ paramsOfCheetiPaataDetail: params });
  // const { cheetiId } = params;
  console.log({ props });
  // console.log({ params, information, payments });
  const session = await getServerSession(authOptions);
  console.log({ session });
  if (!session) {
    redirect("/auth/login");
  }

  const cheetiPaata = {
    cheeti: { cheetiId: props.params.cheetiId },
    payments: [],
  };

  return (
    <div className="cheeti-paata-detail">
      <div className="container mx-auto">
        <div className="flex gap-4">
          <div className="banner-with-tabs w-2/3">{props.information}</div>
          <div className="cheeti-info w-1/3">
            {/* <CheetiPaataCard cheetiPaata={cheetiPaata} /> */}
            {props.payments}
          </div>
        </div>
      </div>
      <div className="content">
        <CheetiPaataDetailsProvider details={cheetiPaata}>
          <MenuTabs />
          {props.children}
        </CheetiPaataDetailsProvider>
      </div>
    </div>
  );
}

export default CheetiPaataLayout;
