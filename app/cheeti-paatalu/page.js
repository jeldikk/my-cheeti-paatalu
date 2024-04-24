import { Suspense } from "react";
import CheetiPaataList from "@/components/cheeti-paata-list/cheeti-paata-list.component";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth/auth.config";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { Spinner } from "flowbite-react";

function CheetiPaataluPageLoader() {
  return (
    <div className="grid place-content-center min-h-screen text-center bg-slate-100 p-4">
      <Spinner aria-label="Loading cheeti paatalu" size="xl" />
      <span className="mx-2 my-2 text-2xl">Loading your data, Please Wait</span>
    </div>
  );
}

async function CheetiPaatalu() {
  // const headers = headers();
  const cheetiListResponse = await fetch(
    "http://localhost:3000/api/cheeti-paatalu",
    {
      method: "GET",
      headers: headers(),
    }
  );
  const cheetiPaatalu = await cheetiListResponse.json();
  return <CheetiPaataList cheetiPaataList={cheetiPaatalu} />;
}

async function CheetiPaataluPage() {
  // const session = await getSession();
  const session = await getServerSession(authOptions);
  console.log({ session });

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="cheeti-paatalu-page">
      <h1 className="text-center text-2xl font-bold p-2.5">
        Cheeti Paatalu Page
      </h1>
      <div className="w-full">
        <Suspense fallback={<CheetiPaataluPageLoader />}>
          <CheetiPaatalu />
        </Suspense>
      </div>
    </div>
  );
}

export default CheetiPaataluPage;
