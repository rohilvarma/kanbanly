import { NextRequest, NextResponse } from "next/server";
import { URL } from "url";
import { addUser, getAll, getUser } from "./handler";


export const GET = async (request: NextRequest): Promise<NextResponse> => {
  const { searchParams } = new URL(request.url);

  const userEmail = searchParams.get("email");
  if (userEmail) {
    return await getUser(userEmail);
  }

  return await getAll();
}

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const { searchParams } = new URL(request.url);
  return await addUser(searchParams);
}