"use client";
import { useFormState } from "react-dom";
import { HiInformationCircle } from "react-icons/hi";
import SubmitButton from "@/components/submit-button/submit-button";
import { actionCreateCheetiPaata } from "@/lib/actions/cheeti-paata";
import { Label, TextInput, Select, Alert } from "flowbite-react";

const INITIAL_STATE = {
  valid: false,
  errors: {
    fields: null,
    message: null,
  },
};

function createCheetiPaataPage() {
  const [state, formAction] = useFormState(
    actionCreateCheetiPaata,
    INITIAL_STATE
  );
  console.log("state ", { state });
  return (
    <div className="cheeti-paata-page">
      {state && state.errors && state.errors.message && (
        <Alert color="failure" icon={HiInformationCircle} withBorderAccent>
          <span className="font-bold text-xl">Info Alert</span>{" "}
          {state.errors.message}
        </Alert>
      )}
      <h1 className="text-center text-2xl font-bold">Create Cheeti Paata</h1>
      <form action={formAction}>
        <div className="mb-3">
          <div className="mb-2 block">
            <Label
              htmlFor="cheeti-name"
              value="Cheeti Name"
              className="font-bold"
            ></Label>
          </div>
          <TextInput
            name="cheetiName"
            id="cheeti-name"
            type="text"
            placeholder="Enter Cheeti Name"
            required
          />
        </div>
        <div>
          <div className="mb-2 block font-bold">
            <Label htmlFor="cheeti-manager-name" value="Cheeti Manager Name" />
          </div>
          <TextInput
            name="managerName"
            id="cheeti-manager-name"
            type="text"
            placeholder="Enter Manager name"
            required
          />
        </div>
        <div>
          <div className="mb-2 block font-bold">
            <Label htmlFor="cheeti-value" value="Cheeti Value"></Label>
          </div>
          <TextInput
            name="cheetiValue"
            id="cheeti-value"
            type="number"
            min="0"
            placeholder="Enter Cheeti Value"
            required
          />
        </div>
        <div>
          <div className="mb-2 block font-bold">
            <Label htmlFor="cheeti-tenure" value="Cheeti Tenure"></Label>
          </div>
          <TextInput
            name="cheetiTenure"
            id="cheeti-tenure"
            type="number"
            placeholder="Enter Cheeti Tenure"
            required
          />
        </div>
        <div>
          <div className="mb-2 block font-bold">
            <Label
              htmlFor="cheeti-start-month"
              value="Cheeti Start Month"
            ></Label>
          </div>
          <div className="flex justify-start">
            <Select id="cheeti-start-month" name="cheetiStartMonth">
              <option value={1}>January</option>
              <option value={2}>February</option>
              <option value={3}>March</option>
              <option value={4}>April</option>
              <option value={5}>May</option>
              <option value={6}>June</option>
              <option value={7}>July</option>
              <option value={8}>August</option>
              <option value={9}>September</option>
              <option value={10}>October</option>
              <option value={11}>November</option>
              <option value={12}>December</option>
            </Select>
            <TextInput
              name="cheetiStartYear"
              id="cheeti-start-year"
              type="number"
              min="1"
              placeholder="Year"
              required
            />
          </div>
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}

export default createCheetiPaataPage;
