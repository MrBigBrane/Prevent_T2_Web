"use server";

// Data is not being uploaded successfully to the server but the console is logged
// and no errors are shown.

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function tableAction(prevState, formData) {
  console.log('entering the post query')
  const supabase = createClient();
  console.log('created client')

  function isInvalidText(text) {
    return !text || text.trim() === "";
  }
  // const userData = {
  //   minutes: formData.get("minutes"),
  //   current_weight: formData.get("weight"),
  //   attendance: formData.get("attendance"),
  //   user: await supabase.auth.getUser(),
  // };

  // if (
  //   isInvalidText(meal.title) ||
  //   isInvalidText(meal.summary) ||
  //   isInvalidText(meal.instructions) ||
  //   isInvalidText(meal.creator) ||
  //   isInvalidText(meal.creator_email) ||
  //   !meal.creator_email.includes('@') ||
  //   !meal.image || meal.image.size === 0
  // ) {
  //     return {
  //         message: 'Invalid input.'
  //     }
  //   }

  const { data, error } = await supabase
    .from("lifestyle_coach_log")
    .insert({
      id: 1,
      minutes: 2,
      current_weight: 5,
      attendance: "yes",
      user: 1234,
    })
    .select();

  console.log("Data posted successfully");

  redirect("/tabletest");
}
