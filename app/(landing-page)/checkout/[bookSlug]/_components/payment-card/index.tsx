"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import React, { useState } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Loader } from "lucide-react";
import Link from "next/link";
type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<FieldValues>;
  setValue: UseFormSetValue<{
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    bkshPhoneNumber: string;
    transactionId: string;
    paymentMethod: string;
    userAgreement: boolean;
  }>;
  loading: boolean;
  amount: number;
};
const PaymentCard = ({
  register,
  errors,
  setValue,
  loading,
  amount,
}: Props) => {
  const handleUserAgreement = () => {
    setValue("userAgreement", true);
  };
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold text-[#2D2D2D] mb-6">Payment</h2>

      <div className="space-y-6">
        <RadioGroup defaultValue="bkash" {...register("paymentMethod")}>
          <div className="flex items-center justify-between p-4 border rounded-md">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="bkash" id="bkash" />
              <Label htmlFor="bkash" className="text-lg text-heading">
                bKash
              </Label>
            </div>
            <Image
              src="/payments/bKash.webp"
              alt="bKash"
              width={32}
              height={32}
              className="rounded-md"
            />
          </div>
          <ErrorMessage
            errors={errors}
            name={"paymentMethod"}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </RadioGroup>

        <div className="space-y-4 p-4 bg-gray-50 rounded-md">
          <p className="text-base text-para font-semibold">
            01. Go to your bKash app or Dial *247#
          </p>
          <p className="text-base text-para font-semibold">{`02. Choose "Send Money"`}</p>
          <p className="text-base text-para font-semibold">
            03. Enter below bKash Account Number
          </p>
          <p className="text-base text-para font-semibold">
            04. Enter <span className="font-medium">total amount</span>
          </p>
          <p className="text-base text-para font-semibold">
            06. Now enter your bKash Account PIN to confirm the transaction
          </p>
          <p className="text-base text-para font-semibold">
            07. Copy Transaction ID from payment confirmation message and paste
            that Transaction ID below
          </p>
          <p className="text-highlight font-semibold">
            You need to send us ₮ {amount}.00
          </p>
        </div>

        <div className="space-y-2">
          <div>
            <span className="text-heading text-lg">Account Type: </span>
            <span className="font-medium text-para text-base ">Personal</span>
          </div>
          <div>
            <span className="text-heading text-lg">Account Number: </span>
            <span className="font-medium text-para text-base">01777136724</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="bkshPhoneNumber" className="text-lg text-heading">
              Your Bkash Account Number
            </Label>
            <Input
              id="bkshPhoneNumber"
              placeholder="01XXXXXXXXX"
              {...register("bkshPhoneNumber")}
            />
          </div>
          <ErrorMessage
            errors={errors}
            name={"bkshPhoneNumber"}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
          <div className="space-y-2">
            <Label htmlFor="transactionId" className="text-lg text-heading">
              Your Bkash Transaction ID
            </Label>
            <Input
              id="transactionId"
              placeholder="BL00RCNC0Y"
              {...register("transactionId")}
            />
          </div>
          <ErrorMessage
            errors={errors}
            name={"transactionId"}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </div>

        <div className="text-sm text-gray-600">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our{" "}
          <Link href="/privacy-policy" className="text-blue-600 hover:underline">
            privacy policy
          </Link>
          .
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="userAgreement"
            {...register("userAgreement")}
            onCheckedChange={handleUserAgreement}
          />
          <Label htmlFor="userAgreement" className="text-lg text-heading">
            I have read and agree to the website{" "}
            <Link href={"/terms-and-conditions"} className="text-blue-600 hover:underline" >terms and conditions</Link>{" "}
            <span className="text-red-500">*</span>
          </Label>
        </div>
        <ErrorMessage
          errors={errors}
          name={"userAgreement"}
          render={({ message }) => (
            <p className="text-red-400 mt-2">
              {message === "Required" ? "" : message}
            </p>
          )}
        />

        <Button
          className="w-full bg-black hover:bg-black/90"
          type="submit"
          size="lg"
          disabled={loading}
        >
          {loading ? <Loader className="animate-spin" /> : "Complete Payment"}
        </Button>
      </div>
    </Card>
  );
};

export default PaymentCard;
