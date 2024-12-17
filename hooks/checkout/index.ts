"use client";

import {
  FieldErrors,
  FieldValues,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutFormSchema } from "@/components/forms/chekout/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Book, Order } from "@prisma/client";
import { z } from "zod";
import { CheckoutPayload, onCheckout, PaymentMethod } from "@/actions/checkout";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type CheckoutFormReturn = {
  register: UseFormReturn["register"];
  errors: UseFormReturn["formState"]["errors"];
  onHandleChekcout: () => Promise<void>;
  isPending: boolean;
  variables: z.infer<typeof checkoutFormSchema>;
};
type BookData = Book | undefined;
export const useCheckoutForm = (bookData: BookData) => {
  const router = useRouter();
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      bkshPhoneNumber: "",
      transactionId: "",
      paymentMethod: "bkash",
      userAgreement: false,
    },
    resolver: zodResolver(checkoutFormSchema),
    reValidateMode: "onChange",
  });

  const client = useQueryClient();

  const { mutate, isPending, error, variables } = useMutation({
    mutationFn: async (data: z.infer<typeof checkoutFormSchema>) => {
      if (data && bookData) {
        const checkoutPayload: CheckoutPayload = {
          customerEmail: data.customerEmail,
          customerName: data.customerName,
          customerPhone: data.customerPhone!,
          bookId: bookData.id,
          amount: bookData.offerPrice,
          transactionId: data.transactionId,
          paymentMethod: data.paymentMethod as PaymentMethod,
          userAgreement: data.userAgreement,
        };
        const checkoutResponse = await onCheckout(checkoutPayload);
        if (checkoutResponse?.status !== 201) {
          // toast.error(checkoutResponse?.message!)
          throw new Error(checkoutResponse?.message!);
        }

        return checkoutResponse;
      }
      return null;
    },
    onSuccess: () => {
      toast.success("You checkout has been completed successfully.");
      router.replace("/thank-you");
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onInvalid = (errors: FieldErrors<FieldValues>) => {
    console.log(errors);
  };

  const onHandleChekcout = handleSubmit(async (values) => {
    mutate(values);
  }, onInvalid);

  return {
    register,
    errors,
    onHandleChekcout,
    isPending,
    variables,
    setValue,
  };
};
