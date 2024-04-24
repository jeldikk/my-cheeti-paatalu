"use client";
import { useContext, useState } from "react";
import { TextInput, Label, Checkbox, Button } from "flowbite-react";
import { CheetiPaataContext } from "@/context/cheeti-paata-detail.context";

function CheetiPaataPayment() {
  const cheetiContext = useContext(CheetiPaataContext);
  const [amount, setAmount] = useState(0);
  const [bidAmount, setBidAmount] = useState(0);
  const [youPaid, setYouPaid] = useState(0);
  const [isOwned, setIsOwned] = useState(false);

  const handleAmountChange = (event) => {
    const amount = event.target.value;
    const youPaid = cheetiContext.cheetiPaata.monthlyPremium - amount;
    const bidAmount = youPaid * cheetiContext.cheetiPaata.cheetiTenure;
    setAmount(amount);
    setBidAmount(bidAmount);
    setYouPaid(youPaid);
  };

  return (
    <div className="cheeti-paata-payment-page px-8 py-4">
      <h3 className="text-2xl text-center">Enter Cheeti Payment Details</h3>
      <form>
        <div>
          <div className="my-4">
            <Label htmlFor="amount" value="Amount" />
          </div>
          <TextInput
            id="amount"
            type="number"
            required
            name="amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="flex gap-4">
          <div className="basis-1/2">
            <div className="my-4">
              <Label htmlFor="bid-amount" value="Bidded Amount" />
            </div>
            <TextInput
              id="bid-amount"
              type="number"
              required
              name="bidAmount"
              value={bidAmount}
              disabled
            />
          </div>
          <div className="basis-1/2">
            <div className="my-4">
              <Label htmlFor="you-paid" value="You Paid" />
            </div>
            <TextInput
              id="you-paid"
              type="number"
              required
              name="youPaid"
              value={youPaid}
              disabled
            />
          </div>
        </div>
        <div className="flex my-4">
          <Checkbox id="you-owned" name="youOwned" required />
          <div>
            <Label htmlFor="you-owned" value="You Owned" />
          </div>
        </div>
        <div className="flex">
          <Button type="reset" color="warn">
            Reset
          </Button>
          <Button type="submit">Create Payment</Button>
        </div>
      </form>
    </div>
  );
}

export default CheetiPaataPayment;
