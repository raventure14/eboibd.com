"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader } from "lucide-react";
import Image from "next/image";
import { Logo } from "@/components/ui/logo";
import { toast } from "react-hot-toast";


export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false)
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true)
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        setError("Invalid credentials");
        return;
      }
      toast.success("Login successfully.")
      router.push("/dashboard");
    } catch (error) {
      setError("An error occurred");
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[400px]">
        <CardHeader>
         <Logo className="mx-auto h-14" />
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Input
                {...register("email")}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="space-y-2">
              <Input
                {...register("password")}
                type="password"
                placeholder="Password"
                required
              />
              
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button disabled={loading} type="submit" className="w-full">
              {loading?<>Please wait <Loader className="animate-spin" /></>:"Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}