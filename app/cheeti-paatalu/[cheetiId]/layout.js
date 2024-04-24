import CheetiPaataCard from "@/components/cheeti-paata/cheeti-paata-card";
import authOptions from "@/lib/auth/auth.config";
import { Card } from "flowbite-react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export const metadata = {
  title: "HERE WE WILL DISPLAY NAME OF CHEETI PAATA",
  description: "Detail Page of cheeti paata is displayed on this webpage",
};

async function fetchCheetiPaataDetails(cheetiId) {
  const cheetiItemResponse = await fetch(
    `http://localhost:3000/api/cheeti-paatalu/${cheetiId}`
  );
  const cheetiPaata = await cheetiItemResponse.json();
  const paymentResponse = await fetch(
    `http://localhost:3000/api/cheeti-paatalu/`
  );
  const payments = await paymentResponse.json();
  return {
    cheetiPaata,
    payments,
  };
}

async function CheetiPaataLayout({ params, children }) {
  // console.log({ paramsOfCheetiPaataDetail: params });
  // const { cheetiId } = params;

  const session = await getServerSession(authOptions);
  console.log({ session });
  if (!session) {
    redirect("/auth/login");
  }

  const { cheetiPaata, payments } = await fetchCheetiPaataDetails(
    params.cheetiId
  );
  console.log({ cheetiPaata, payments });

  return (
    <div className="cheeti-paata-detail">
      <div className="container mx-auto">
        <div className="flex gap-4">
          <div className="banner-with-tabs w-2/3">
            <Card>
              <h2>Cheeti Paata Name with Manager Name</h2>
            </Card>
          </div>
          <div className="cheeti-info w-1/3">
            {/* <CheetiPaataCard cheetiPaata={cheetiPaata} /> */}
            <Card>
              <h2>Cheeti Paata Info is shown</h2>
            </Card>
          </div>
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
}

export default CheetiPaataLayout;
