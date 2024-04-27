import dbConnect from "../db-connect";
import CheetiPaata from "../models/cheeti-paata.model";
import CheetiPaataPayment from "../models/cheeti-paata-payment.model";

export async function createCheetiPaata(cheetiPaata) {
  try {
    const response = await CheetiPaata.create(cheetiPaata);
    return response;
  } catch (err) {
    throw err;
  }
}

export async function isCheetiPaataExist(cheetiPaata) {
  const {
    cheetiValue,
    monthlyPremium,
    cheetiTenure,
    cheetiStartYear,
    cheetiStartMonth,
  } = cheetiPaata;
  try {
    const filterResult = await CheetiPaata.find({
      cheetiValue,
      monthlyPremium,
      cheetiTenure,
      cheetiStartMonth,
      cheetiStartYear,
    });
    console.log({ filterResult });
    return filterResult.length > 0;
  } catch (err) {}
}

export async function getAllCheetiPaatalu() {
  try {
    // await dbConnect();
    const cheetilu = await CheetiPaata.find({});
    const cheetiList = cheetilu.map((c) => c.toJSON());
    return cheetiList;
  } catch (err) {}
}

export async function getCheetiPaata(cheetiId) {
  try {
    const cheeti = await CheetiPaata.find({ cheetiId });
    if (cheeti) {
      return cheeti.toJSON();
    }
    return null;
  } catch (err) {
    throw err;
  }
}
export async function getCheetiPayments(cheetiId) {
  try {
    const payments = await CheetiPaataPayment.find({ cheetiId: cheetiId });
    return payments.map((p) => p.toJSON());
  } catch (err) {
    throw err;
  }
}

export async function getCheetiPaataDetails(cheetiId) {
  const cheeti = await getCheetiPaata(cheetiId);
  const payments = await getCheetiPayments(cheetiId);
  return {
    cheeti,
    payments,
  };
}
