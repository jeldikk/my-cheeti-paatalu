"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { v4 as uuidV4 } from "uuid";

import {
  createCheetiPaata,
  isCheetiPaataExist,
} from "../operations/cheeti-paata.operations";

const { validateData } = require("../validators");
const CheetiPaataSchema = require("../validators/schemas/cheeti-paata.schema");

export async function actionCreateCheetiPayment(prevState, formData) {
  console.log("calling to create a cheeti paata action");
  console.log({ prevState, formData });

  try {
  } catch (err) {}
}

export async function actionCreateCheetiPaata(prevState, formData) {
  console.log({ prevState, formData });
  console.log("calling to create a Cheeti paata");
  const cheetiValue = parseInt(formData.get("cheetiValue"), 10);
  const cheetiTenure = parseInt(formData.get("cheetiTenure"), 10);
  const monthlyPremium = cheetiValue / cheetiTenure;
  const cheetiPaata = {
    cheetiId: uuidV4(),
    cheetiName: formData.get("cheetiName"),
    cheetiValue,
    monthlyPremium,
    managerName: formData.get("managerName"),
    cheetiTenure,
    cheetiStartYear: parseInt(formData.get("cheetiStartYear", 10)),
    cheetiStartMonth: parseInt(formData.get("cheetiStartMonth"), 10),
  };

  try {
    const { valid, errors } = validateData(CheetiPaataSchema, cheetiPaata);
    if (!valid) {
      return {
        valid,
        errors: {
          message: "There are Some Errors while validating form",
          fields: errors,
        },
      };
    } else {
      const res = await fetch("http://localhost:3000/api/cheeti-paatalu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cheetiPaata),
      });
      console.log({ res });
      console.log("response recieved from api");
    }
  } catch (err) {
    console.error({ err });
    console.error("Error occurred whiel creating cheeti paata");
    return {
      valid: false,
      errors: {
        message: err.message,
        fields: null,
      },
    };
  }

  revalidatePath("/cheeti-paatalu");
  redirect("http://localhost:3000/cheeti-paatalu");
}
