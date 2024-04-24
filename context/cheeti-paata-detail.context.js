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
  const [cheetiPaata, setCheetiPaata] = useState({});
  const [payments, setPayments] = useState([]);

  const generateSummary = () => {};

  return (
    <CheetiPaataContext.Provider
      value={{ cheetiPaata, payments, generateSummary }}
    >
      <SessionProvider session={session}>{children}</SessionProvider>
    </CheetiPaataContext.Provider>
  );
}
