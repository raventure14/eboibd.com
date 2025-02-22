import { z } from 'zod';


// Define the Zod schema for the Order model
export const checkoutFormSchema = z.object({
  customerName: z.string().min(1, 'Customer name is required'),
  customerEmail: z
    .string()
    .email('Invalid email format')
    .min(1, 'Customer email is required'),
  customerPhone: z.string().regex(
    /^(\+8801|01)[3-9]\d{8}$/,
    "Invalid phone number. Must be in the format +8801XXXXXXXXX or 01XXXXXXXXX."
  ), // Optional with phone format validation
  bkshPhoneNumber: z.string().regex(
    /^(\+8801|01)[3-9]\d{8}$/,
    "Invalid phone number. Must be in the format +8801XXXXXXXXX or 01XXXXXXXXX."
  ), // Optional with phone format validation
  transactionId: z.string({message:"transaction ID is required."}).regex(
    /^[A-Z0-9]{10}$/, // Regex for "BL" followed by 8 alphanumeric characters
    "Please enter valid transaction ID"),
  paymentMethod:z.string().min(4, {message:"Paymetn method is required"}),
  userAgreement:z.boolean({message:"User agreement is required"}).refine((value) =>{
    console.log("value: ", value)
    return  value === true
  }, {
    message: "You must accept the user agreement to proceed.",
  })
});