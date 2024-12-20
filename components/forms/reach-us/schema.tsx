import z from "zod" 


export const reachUsFormSchema = z.object({
    email:z.string({message:"Email is required"}).email({message:"Please enter valid email."}),
    phone:z.string().optional(),
    query:z.string().min(5, {message:"Query length must be at least 5 characters."}).max(500, {message:"Query length can't be more that 500 chacacters."})
})