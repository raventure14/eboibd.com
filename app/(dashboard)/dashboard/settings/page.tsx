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

export default function AccountSettings() {
  const session = useSession();
  const user = session.data?.user;

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [isNameDisabled, setIsnameDisabled] = useState(true);
  const [name, setName] = useState(user?.name || "");

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
    console.log("name: ", e.target.name);
    if (e.target.name === "name") {
      setName(e.target.value);
    }
  };
  return (
    <div className="w-[calc(100vw-335px)] mt-32 p-4 md:p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Profiel Settings
        </h1>
        <p className="text-sm text-muted-foreground">
          To change your name click on the <strong>Name</strong> label
        </p>
      </div>

      <div className="space-y-4">
        {/* <div className="space-y-2">
          <h2 className="text-lg font-medium">Profile picture</h2>
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24">
              <Image
                src="/placeholder.svg"
                alt="Profile picture"
                className="rounded-full object-cover"
                fill
              />
            </div>
            <div className="space-x-2">
              <Button variant="outline" size="sm">
                Upload new picture
              </Button>
              <Button variant="ghost" size="sm">
                Delete
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            PNG, JPEG under 15MB
          </p>
        </div> */}

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
                defaultValue={name}
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
              <Input id="role" type="text" defaultValue={user?.role} disabled />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-medium">Password</h2>
          <p className="text-sm text-muted-foreground">
            Modify your current password.
          </p>
          <div className="space-y-2 w-full lg:w-[49%] ">
            <Label htmlFor="oldPassword">Current password</Label>
            <div className="relative">
              <Input
                id="oldPassword"
                type={showOldPassword ? "text" : "password"}
                placeholder="Abc@1234"
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
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current password</Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={showCurrentPassword ? "text" : "password"}
                  placeholder="Abc@1234"
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
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">New password</Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Abd@1234"
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
            </div>
          </div>
           <Button className="bg-green-500/50 hover:bg-green-500/100" >Save</Button>
        </div>
      </div>
    </div>
  );
}
