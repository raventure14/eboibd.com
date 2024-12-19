import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import jwt from 'jsonwebtoken'


const SECRET_KEY =
  process.env.JWT_SECRET_KEY ||
    "dukadfjas@kl%^saf%4ser$%awl9327eal32oaeeiyu2384qwrleo3ry"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type TokenPayload ={
  bookId:string;
  bookName:string;
  customerName:string;
  bookImage:string
}
export async function generateToken(payload:TokenPayload, ) {
  try {
    console.log("SecretKey: ", SECRET_KEY)
       
       const token =await jwt.sign(payload,SECRET_KEY, {
        expiresIn:"365d"
       })
       return token
  } catch (error) {
    return false
  }
}
// export async function verifyToken(token:string ) {
//   try {
//     console.log("SecretKey: ", SECRET_KEY)

//     const payload = await jwt.verify(token, SECRET_KEY,)
//     console.log("verifiedToken: ",payload)
//     return {payload}
//   } catch (error) {
//     console.log("verifyToken-Error: ", error)
//     return false
//   }
// }

export async function verifyToken(token: string): Promise<TokenPayload | false> {
  try {
    if (!SECRET_KEY) {
      throw new Error("SECRET_KEY is not defined!");
    }

    if (!token) {
      throw new Error("Token is not provided!");
    }

    console.log("SecretKey: ", SECRET_KEY);
    console.log("Token: ", token);

    // Verify the token
    const payload =await jwt.verify(token, SECRET_KEY) ;
    console.log("Payload: ", payload)
    // Validate the required properties in the payload
    if (
      typeof payload === "object" &&
      payload.bookId &&
      payload.bookName &&
      payload.customerName
    ) {
      console.log("Verified Token Payload: ", payload);
      return {
        bookId: payload.bookId,
        bookName: payload.bookName,
        customerName: payload.customerName,
        bookImage:payload.bookImage
      };
    } else {
      console.error("Invalid Token Payload: Missing required properties.");
      return false;
    }
  } catch (error: any) {
    console.error("verifyToken-Error: ", error);
    return false;
  }
}
