"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import { Eye, EyeOff, Loader } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useChangePassworForm } from "@/hooks/change-password";

import { ErrorMessage } from "@hookform/error-message";

type Props = {
  userId: string;
};
const ChangePasswordForm = ({ userId }: Props) => {
  const { register, errors, handleOnSubmit, loading } =
    useChangePassworForm(userId);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="space-y-4">
        <h2 className="text-lg font-medium">Password</h2>
        <p className="text-sm text-muted-foreground">
          Modify your current password.
        </p>
        <div className="space-y-2 w-full lg:w-[49%] ">
          <Label htmlFor="oldPassword">Old password</Label>
          <div className="relative">
            <Input
              id="oldPassword"
              type={showOldPassword ? "text" : "password"}
              placeholder="Abc@1234"
              {...register("oldPassword")}
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setShowOldPassword(!showOldPassword)}
            >
              {showOldPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
          <ErrorMessage
            errors={errors}
            name={"oldPassword"}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <div className="relative">
              <Input
                id="newPassword"
                type={showCurrentPassword ? "text" : "password"}
                placeholder="Abc@1234"
                {...register("newPassword")}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            <ErrorMessage
              errors={errors}
              name={"newPassword"}
              render={({ message }) => (
                <p className="text-red-400 mt-2">
                  {message === "Required" ? "" : message}
                </p>
              )}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
            <div className="relative">
              <Input
                id="confirmNewPassword"
                type={showNewPassword ? "text" : "password"}
                placeholder="Abd@1234"
                {...{ ...register("confirmNewPassword") }}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            <ErrorMessage
              errors={errors}
              name={"confirmNewPassword"}
              render={({ message }) => (
                <p className="text-red-400 mt-2">
                  {message === "Required" ? "" : message}
                </p>
              )}
            />
          </div>
        </div>
        <Button
          type="submit"
          className="bg-green-500/90 hover:bg-green-500/100"
          disabled={loading}
        >
          {loading ? (
            <>
              Saving <Loader className="animate-spin" />
            </>
          ) : (
            " Save"
          )}
        </Button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
