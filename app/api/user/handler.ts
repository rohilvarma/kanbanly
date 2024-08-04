import { db } from "@/db";
import {
  boardsTable,
  InsertUser,
  SelectUser,
  tasksTable,
  usersTable,
} from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { MissingValueError, UserNotFoundError } from "./errors";

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
export const getUser = async (email: string): Promise<NextResponse> => {
  try {
    const response: SelectUser[] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));
    if (response.length === 0) {
      throw new UserNotFoundError("User not found.");
    }
    return NextResponse.json(response[0]);
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
 * Creates a new user in the database based on the provided name and email.
 *
 * @param {URLSearchParams} searchParams - The URL search parameters containing the user's name and email.
 * @return {Promise<NextResponse>} A promise that resolves to a NextResponse object indicating the result of the user creation.
 */
export const addUser = async (
  searchParams: URLSearchParams
): Promise<NextResponse> => {
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  try {
    if (name === null || email === null) {
      throw new MissingValueError(
        "Either name or the email is missing from this request."
      );
    }
    const newUser: InsertUser = {
      name: name,
      email: email,
    };

    const response = await db.insert(usersTable).values({
      ...newUser,
    });
    return NextResponse.json("New User created successfully.", { status: 201 });
  } catch (error) {
    if (error instanceof MissingValueError) {
      console.log(`Inputs received: {name: ${name}, email: ${email}}`);
      return NextResponse.json(error.message, { status: 400 });
    } else {
      console.log(error);
      return NextResponse.json(error, { status: 500 });
    }
  }
};
