"use client";
import { onChangePassword } from "@/actions/user";
import { changePassFormSchema } from "@/components/forms/change-password/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

export const useChangePassworForm = (userId: string) => {
  const [loading, setLoading] = useState(false);
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    resolver: zodResolver(changePassFormSchema),
  });
  const onFormSubmit = async (data: z.infer<typeof changePassFormSchema>) => {
    try {
      setLoading(true);
      const changePassword = await onChangePassword(
        userId,
        data.oldPassword,
        data.newPassword
      );
      if (changePassword.status !== 200) {
        return toast.error(changePassword.message);
      }

      toast.success(
        "Password has been changed successfully. Please login to continue."
      );

      await signOut();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleOnSubmit = handleSubmit(onFormSubmit);

  return {
    loading,
    errors,
    register,
    handleOnSubmit,
  };
};
