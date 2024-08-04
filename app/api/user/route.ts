import { NextRequest, NextResponse } from "next/server";
import { URL } from "url";
import { getAll, getUser } from "./handler";


export const GET = async (request: NextRequest): Promise<NextResponse> => {
  const { searchParams } = new URL(request.url);

  const userEmail = searchParams.get("email");
  if (userEmail) {
    return await getUser(userEmail);
  }

  return await getAll();
}


// export async function POST(request: NextRequest): Promise<NextResponse> {
//   /**
//    * Handles the HTTP POST request to insert a new user into the database.
//    *
//    * @param {NextRequest} request - The request object containing the search parameters.
//    * @return {Promise<NextResponse>} A promise that resolves to a NextResponse object with the response data.
//    * @throws {TypeError} If the name or email search parameters are null.
//    * @throws {NextResponse} If the request is invalid, with a status code of 400.
//    * @throws {NextResponse} If an error occurs during the insertion, with a status code of 500.
//    */
//   const searchParams = new URL(request.url).searchParams;

//   try {
//     const name = searchParams.get("name");
//     const email = searchParams.get("email");
//     if (name === null || email === null) {
//       throw new TypeError("Invalid type of name or email passed.");
//     }
//     const newUser: InsertUser = {
//       name: name,
//       email: email,
//     };
//     const response = await db.insert(usersTable).values({
//       ...newUser,
//     });

//     return NextResponse.json(
//       { message: "User created successfully." },
//       { status: 201 }
//     );
//   } catch (error) {
//     if (error instanceof TypeError) {
//       console.log("Inputs received:", searchParams.toString());
//       return NextResponse.json(
//         { error_type: error.name, message: error.message },
//         { status: 400 }
//       );
//     } else {
//       console.log(error);
//       return NextResponse.json(error, { status: 500 });
//     }
//   }
// }
