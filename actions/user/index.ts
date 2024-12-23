"use server";
import { prismaDB } from "@/lib/prismal";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";

export async function onUpdateUserName(email: string, name: string) {
  try {
    console.log(name, email);
    const user = await prismaDB.user.update({
      where: {
        email,
      },
      data: {
        name,
      },
    });

    if (!user) {
      return {
        status: 404,
        message: "user not found",
      };
    }
    revalidatePath("/dashboard/settings");
    return {
      status: 200,
      data: user,
    };
  } catch (error) {}
}

export async function onChangePassword(
  userId: string,
  oldPassword: string,
  newPassword: string
) {
  try {
    const user = await prismaDB.user.findUnique({
      where: {
        id: userId,
      },
    });

    const isMatchedOldPassword = await bcrypt.compare(
      oldPassword,
      user?.password!
    );

    if (!isMatchedOldPassword) {
      return {
        status: 400,
        message: "Please enter correct old password",
      };
    }
    const newHashedPassword = await bcrypt.hash(newPassword, 12);

    const updatePassword = await prismaDB.user.update({
      where: {
        id: userId,
      },
      data: {
        password: newHashedPassword,
      },
    });

    if (!updatePassword) {
      return {
        status: 500,
        message: "Failed to update password! please try again later",
      };
    }

    return {
      status: 200,
      message: "Password changed successfully.",
    };
  } catch (error) {
    console.log("onChangePassword-Error: ", error);
    return {
      status: 500,
      message: "Failed to update password! please try again later",
    };
  }
}
