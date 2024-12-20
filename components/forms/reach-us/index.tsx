"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useReachusForm } from "@/hooks/forms/reach-us";
import { ErrorMessage } from "@hookform/error-message";
import { Loader } from "lucide-react";
import React from "react";

const ReachUsForm = () => {
  const { register, errors, onHandleSubmit, loading } = useReachusForm();
  return (
    <form onSubmit={onHandleSubmit}  className="space-y-4">
      <Input
        id="email"
        type="email"
        placeholder="example@gmail.com"
        {...register("email")}
        className="bg-[#E5E5E5] border-0"
      />
      <ErrorMessage
        errors={errors}
        name={"email"}
        render={({ message }) => (
          <p className="text-red-400 mt-2">
            {message === "Required" ? "" : message}
          </p>
        )}
      />
      <Input
        id="phone"
        type="text"
        placeholder="your phone number(optional)"
        {...register("phone")}
        className="bg-[#E5E5E5] border-0"
      />
      <Textarea
        id="query"
        placeholder="Write your query"
        {...register("query")}
        className="bg-[#E5E5E5] border-0 min-h-[120px]"
      />
      <ErrorMessage
        errors={errors}
        name={"query"}
        render={({ message }) => (
          <p className="text-red-400 mt-2">
            {message === "Required" ? "" : message}
          </p>
        )}
      />
      <Button disabled={loading}  className="bg-[#00C49A] hover:bg-[#00B389] text-white px-8">
       {loading?<span className="flex items-center gap-1">Submiting <Loader className="animate-spin" /></span>:"submit"}
      </Button>
    </form>
  );
};

export default ReachUsForm;
