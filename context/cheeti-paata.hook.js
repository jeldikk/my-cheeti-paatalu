import { useContext } from "react";
import { CheetiPaataContext } from "./cheeti-paata-detail.context";

export function useCheetiPaataContext() {
  const cheetiPaata = useContext(CheetiPaataContext);
  return cheetiPaata;
}
