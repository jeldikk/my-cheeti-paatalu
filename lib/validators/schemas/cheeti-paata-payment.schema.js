import { additionalProperties, required } from "./cheeti-paata.schema";

export default {
  type: "object",
  properties: {
    cheetiId: { type: "string" },
    paymentId: { type: "string" },
    amount: { type: "number" },
    paataDate: { type: "string" },
    bidAmount: { type: "number" },
    youPaid: { type: "number" },
    isOwned: {
      type: "boolean",
    },
  },
  required: [
    "cheetiId",
    "paymentId",
    "amount",
    "paataDate",
    "bidAmount",
    "youPaid",
    "isOwned",
  ],
  additionalProperties: false,
};
