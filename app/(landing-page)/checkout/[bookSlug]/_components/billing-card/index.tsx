import { checkoutFormSchema } from "@/components/forms/chekout/schema";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<FieldValues>;
};
const BillingCard = ({ register, errors }: Props) => {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold text-[#2D2D2D] mb-6">
        Billing details
      </h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="customerName" className="text-heading text-lg">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="customerName"
            placeholder="Full name"
            {...register("customerName")}
            className="border-gray-300 focus:border-gray-400 focus:ring-0"
          />
           <ErrorMessage
            errors={errors}
            name={"customerName"}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="customerEmail" className="text-heading text-lg">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="customerEmail"
            type="email"
            placeholder="Email address"
            {...register("customerEmail")}
            className="border-gray-300 focus:border-gray-400 focus:ring-0"
          />
          <ErrorMessage
            errors={errors}
            name={"customerEmail"}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="customerPhone" className="text-heading text-lg">
            Phone <span className="text-red-500">*</span>
          </Label>
          <Input
            id="customerPhone"
            type="text"
            placeholder="Mobile number"
            {...register("customerPhone")}
            className="border-gray-300 focus:border-gray-400 focus:ring-0"
          />
           <ErrorMessage
            errors={errors}
            name={"customerPhone"}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </div>
      </div>
    </Card>
  );
};

export default BillingCard;
