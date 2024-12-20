import { Resend} from "resend"

export const resend = new Resend(process.env.RESEND_API_KEY||"re_GBkGfbb8_HKhuYqPfFeF7veCoLAPajM6f");