import z from "zod";

export const changePassFormSchema = z.object({
  oldPassword: z
    .string()
    .min(8, { message: "Old password is required" }),
  newPassword: z
    .string()
    .min(8, { message: "New password is required" }).regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
        "Password must be at least 8 characters long and include at least one uppercase letter (A-Z), one lowercase letter (a-z), one number (0-9), and one special character (e.g., @$!%*?&#)."
      ),
  confirmNewPassword: z
    .string()
    .min(8, { message: "Confirm new password is required" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      "Password must be at least 8 characters long and include at least one uppercase letter (A-Z), one lowercase letter (a-z), one number (0-9), and one special character (e.g., @$!%*?&#)."
    ),
   
}).superRefine((value,ctx) =>{
    if(value.newPassword !== value.confirmNewPassword){
        ctx.addIssue({
            path:["confirmNewPassword"], 
            code:z.ZodIssueCode.custom,
            message:"New password and Confirm  new password not matched"
        })
    }
});
