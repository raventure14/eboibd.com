import { onSendQueryEmail } from "@/actions/query";
import { reachUsFormSchema } from "@/components/forms/reach-us/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";

export const useReachusForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset
  } = useForm({
    defaultValues: {
      email: "",
      phone: "",
      query: "",
    },
    resolver: zodResolver(reachUsFormSchema),
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: z.infer<typeof reachUsFormSchema>) => {
    try {
        setLoading(true)
      const emailResponse = await onSendQueryEmail(data);
      if (emailResponse.status !== 200) {
        console.log("useReachusForm-Error: ", emailResponse.info)
        return toast.error(
          "Something went wrong! Please send your query manually to our support email.",
          { position: "bottom-left" }
        );
      }

      toast.success(
        "Thank you for contacting us! Your query has been successfully submitted. Our support team will respond to your email within 24 hours.",
        { position: "bottom-right" }
      );
      reset()
    } catch (error) {
        console.log("useReachusForm-Error: ", error)
        toast.error(
            "Something went wrong! Please send your query manually to our support email.",
            { position: "bottom-left" }
          );
    } finally {
        setLoading(false)
    }
  };

  const onHandleSubmit = handleSubmit(onSubmit);

  return {
    loading,
    errors,
    register,
    onHandleSubmit,
  };
};
