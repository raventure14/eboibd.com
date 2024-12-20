"use server"
import { SupportQueryEmail } from "@/email/support-query-email";
import { resend } from "@/lib/resend";

type QueryProps = {
    email:string;
    phone?:string;
    query:string
}

const supportEmail = process.env.SUPPORT_EMAIL as string;
export const onSendQueryEmail = async ({email, phone, query}:QueryProps) => {
    try {
        console.log("supportEmail: ", supportEmail)
        const {data,error } = await resend.emails.send({
            from: "eboibd <support@eboibd.com>",
            to:[supportEmail],
            subject:"You have recieved new query form customer",
            react: SupportQueryEmail({email, phone, query})
        })

        if(!data) {
              return {
                status:400,
                message:"something went wrong",
                info:error
            }
        }
        if(error){
            return {
                status:400,
                message:"something went wrong",
                info:error
            }
        }
        return {
            status:200, 
            message:"Query send successfully.",
        }
    } catch (error) {
        console.log("onSendQueryEmail-Error: ", error)
        return {
            status:500,
            message:"something went wrong",
            info:error
        }
    }
}