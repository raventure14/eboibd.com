"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Eye, EyeOff, Loader } from "lucide-react";
import Image from "next/image";
import { onUpdateUserName } from "@/actions/user";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import ChangePasswordForm from "@/components/forms/change-password";

export default function AccountSettings() {
  const session = useSession();
  const user = session.data?.user;

  console.log(session);
  const [isNameDisabled, setIsnameDisabled] = useState(true);
  const [name, setName] = useState(user?.name!);

  const [isLoading, setIsLoading] = useState(false);
  const handleOnBlur = async () => {
    if (user) {
      try {
        setIsLoading(true);
        const updateResponse = await onUpdateUserName(user.email!, name);
        if (updateResponse?.status !== 200) {
          return toast.error("Please try again later!");
        }

        toast.success("Name updated successfully");
        setIsnameDisabled(true);
      } catch (error) {
        console.log("handleOnBlur-Error: ", error);
        toast.error("Something went wrong please try again later!");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleNameDisabled = () => {
    setIsnameDisabled(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
  };
  return (
    <>
      {!user && (
        <div className="min-h-screen w-full justify-center items-center">
          {" "}
          <Loader className="animate-spin text-highlight" />{" "}
        </div>
      )}
      {user && (
        <div className=" w-full  lg:w-[calc(100vw-335px)] pb-16 mt-16 lg:mt-32 p-4 md:p-6  space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              Profiel Settings
            </h1>
            <p className="text-sm text-muted-foreground">
              To change your name click on the <strong>Name</strong> label
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Full name</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2 relative">
                  <Label htmlFor="name" onClick={handleNameDisabled}>
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    defaultValue={user.name!}
                    onBlur={handleOnBlur}
                    disabled={isNameDisabled}
                  />
                  {/* ${isLoading ?"visible":"hidden"} ${isLoading && "animate-spin"} */}
                  <Loader
                    className={`w-4 h-4 absolute top-9 right-2 text-muted-foreground ${isLoading ? "visible" : "hidden"} ${isLoading && "animate-spin"}`}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue={user?.email!}
                    disabled={true}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Role</Label>
                  <Input
                    id="role"
                    type="text"
                    defaultValue={user?.role}
                    disabled
                  />
                </div>
              </div>
            </div>
            {/* Change password form */}

            <ChangePasswordForm userId={user._id!} />
          </div>
        </div>
      )}
    </>
  );
}
