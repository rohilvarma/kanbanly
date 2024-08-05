import { db } from "@/db";
import { boardsTable, SelectBoard } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";


export async function getAll(): Promise<NextResponse> {
  try {
    const response: SelectBoard[] = await db.select().from(boardsTable);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(error, { status: 500 });
  }
}

export const getUserBoards = async (userId: string): Promise<NextResponse> => {
  console.log("handler", userId);
  
  try {
    const response: SelectBoard[] = await db
      .select()
      .from(boardsTable)
      .where(eq(boardsTable.user_id, userId));

    return NextResponse.json(response, { status: 200 });
    
  } catch (error) {
    console.error(error);
    return NextResponse.json(error, { status: 500 });
  }
};
