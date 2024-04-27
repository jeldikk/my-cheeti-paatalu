"use client";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";
import { createContext } from "react";

export const CheetiPaataContext = createContext({
  cheetiPaata: null,
  payments: null,
  generateSummary: () => {},
});

export function CheetiPaataDetailsProvider(props) {
  const { details, session, children } = props;
  //   const { cheetiDetails, paymentDetails } =
  console.log({ details });
  const [cheeti, setCheeti] = useState(details.cheeti);
  const [payments, setPayments] = useState(details.payments);

  const generateSummary = () => {
    return {
      paymentsCount: 12,
      recentDate: new Date(),
      remaining: 8,
      totalCount: 20,
      previousAmount: "1232",
      maxAmount: "12321",
    };
  };

  return (
    <CheetiPaataContext.Provider value={{ cheeti, payments, generateSummary }}>
      <SessionProvider session={session}>{children}</SessionProvider>
    </CheetiPaataContext.Provider>
  );
}
