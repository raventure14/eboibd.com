"use server"
import { prismaDB } from "@/lib/prismal";
import { revalidatePath } from "next/cache";


export async function onUpdateUserName(email:string, name:string) {


    try {
        console.log(name, email)
        const user = await prismaDB.user.update({
            where:{
                email
            },
            data:{
                name
            }
        })

        if(!user){
            return {
                status:404,
                message:"user not found"
            }
        }
        revalidatePath("/dashboard/settings")
        return {
            status:200,
            data:user
        }
    } catch (error) {
        
    }
    
}