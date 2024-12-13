"use server"

import { prismaDB } from "@/lib/prismal"

export const onGetBook =async () =>{
    try {
        const book = await prismaDB.book.findFirst({
            where:{
                slug:"chatgpt-ai-prompt-mastery"
            }
        })
        if(!book){
            return {
                status:404,
                message:"No book found!"
            }
        }
        return {
            status:200,
            book
        }
    } catch (error) {
        console.log("onGetBook-Error: ", error)
        return {
            status:500,
            message:"Something went wrong!"
        }
    }
}