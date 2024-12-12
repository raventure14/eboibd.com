"use server";

import { prismaDB } from "@/lib/prismal";

type ClickPayload = {
  day: number;
  month: number;
  year: number;
  totalClicks: number;
};
export async function onCreateClick(data: ClickPayload) {
  try {
    const isDayClick = await prismaDB.clicks.findFirst({
      where: {
        day: data.day,
        month: data.month,
        year: data.year,
      },
    });

    if (isDayClick) {
      const updateTodayClick = await prismaDB.clicks.update({
        where: {
          id: isDayClick.id,
        },
        data: {
          totalClicks: isDayClick.totalClicks + 1,
        },
      });
      if (!updateTodayClick) {
        return {
          status: 500,
          messag: "Something went wrong!",
          info: updateTodayClick || null,
        };
      }
      return {
        status: 200,
        message: "Today click updated successfully",
      };
    } else {
      const newDayClick = await prismaDB.clicks.create({
        data,
      });
      console.log(newDayClick);
      if (!newDayClick) {
        return {
          status: 500,
          message: "Something went wrong!",
        };
      }

      return {
        status: 201,
        message: "Today click create successfully",
      };
    }
  } catch (error) {
    console.log("onCreateClick-Error: ", error);
    return {
      status: 500,
      message: "Something went wrong!",
    };
  }
}
