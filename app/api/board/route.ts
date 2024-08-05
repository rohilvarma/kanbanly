import { NextRequest, NextResponse } from "next/server";
import { URL } from "url";
import { getAll, getUserBoards } from "./handler";
import { boardsTable, InsertBoard } from "@/db/schema";
import { db } from "@/db";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);

  const userId = searchParams.get("user_id");

  // Incase we want the GET request to return boards for a specific user.
  if (userId) {
    return await getUserBoards(userId);
  }

  // Incase we want the GET request to return all boards.
  return await getAll();
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const searchParams = new URL(request.url).searchParams;

  try {
    const userId = searchParams.get("user_id");
    const boardName = searchParams.get("board_name");

    if (userId === null || boardName === null) {
      throw TypeError("Invalid type of user_id or board_name passed.");
    }
    const newBoard: InsertBoard = {
      name: boardName,
      user_id: userId,
    };

    const response = await db.insert(boardsTable).values({
      ...newBoard,
    });

    return NextResponse.json(
      { message: "Board created successfully." },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("Inputs received:", searchParams.toString());
      return NextResponse.json(
        { error_type: error.name, message: error.message },
        { status: 400 }
      );
    } else {
      console.log(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
}
