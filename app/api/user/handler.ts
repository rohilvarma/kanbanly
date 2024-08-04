import { db } from "@/db";
import { boardsTable, SelectUser, tasksTable, usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

class UserNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserNotFoundError";
  }
}

/**
 * Retrieves all users from the database.
 *
 * @return {Promise<NextResponse>} A promise that resolves to a NextResponse object containing the user data.
 * If no users are present in the database, a TypeError is thrown with a message indicating this.
 * If an error occurs during the retrieval process, the error is logged and a NextResponse object is returned with a status of 500.
 */
export const getAll = async (): Promise<NextResponse> => {
  try {
    const response: SelectUser[] = await db.select().from(usersTable);
    if (response.length === 0) {
      throw new UserNotFoundError("No users are present in the database.");
    }
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    if (error instanceof UserNotFoundError) {      
      return NextResponse.json(error.message, { status: 404 });
    } else {
      console.log(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
};

/**
 * Retrieves a user from the database based on their email.
 *
 * @param {string} email - The email of the user to retrieve.
 * @return {Promise<NextResponse>} A promise that resolves to a NextResponse object containing the user data.
 * If the user is not found, a UserNotFoundError is thrown with a message indicating this.
 * If an error occurs during the retrieval process, the error is logged and a NextResponse object is returned with a status of 500.
 */
export const getUser = async(email: string): Promise<NextResponse> => {
  try {
    const response: SelectUser[] = await db.select().from(usersTable).where(eq(usersTable.email, email));
    if (response.length === 0) {
      throw new UserNotFoundError("User not found.");
    }
    return NextResponse.json(response[0]);
  }
  catch(error) {
    if(error instanceof UserNotFoundError) {
      return NextResponse.json(error.message, { status: 404 });
    }
    else {
      console.log(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
}