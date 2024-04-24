import authOptions from "@/lib/auth/auth.config";
import dbConnect from "@/lib/db-connect";
import {
  createCheetiPaata,
  getAllCheetiPaatalu,
  isCheetiPaataExist,
} from "@/lib/operations/cheeti-paata.operations";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function GET(request) {
  console.log("I am from GET request of cheeti-paatalu route.js file");
  // return new Response("Hello from cheeti-paatalu page");
  // const response = NextResponse.next();
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      throw new Error("Unauthorized user");
    }
    await dbConnect();
    const cheetiList = await getAllCheetiPaatalu(); // here we need to pass filters if possible
    // const cheetiList = cheetiItems.map((cheeti) => cheeti.toJSON());
    return NextResponse.json(cheetiList);
  } catch (err) {
    console.error({ err });
    return NextResponse.json(
      {
        error: err.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request) {
  /**
   * TODO: check for session token before proceeding else throw Unauthorized error;
   */
  try {
    await dbConnect();
    const cheetiPaata = await request.json();
    const isCheetiExists = await isCheetiPaataExist(cheetiPaata);
    if (isCheetiExists) {
      throw new Error("CheetiPaataExists");
    }
    const cheeti = await createCheetiPaata(cheetiPaata);

    return NextResponse.json({
      cheeti: cheeti.toJSON(),
    });
  } catch (err) {
    console.error({ err });
    return NextResponse.json(
      {
        error: err.message,
      },
      {
        status: 500,
      }
    );
  }
}
