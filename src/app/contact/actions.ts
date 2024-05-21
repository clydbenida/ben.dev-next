"use server";

import { cookies } from "next/headers";

export async function sendMail(formData: FormData) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.success) {
    console.log(data);
    const oneWeek = 24 * 60 * 60 * 1000 * 7;
    cookies().set("canSendMail", "false", { expires: Date.now() + oneWeek });
    return { data, isSuccess: true };
  } else {
    console.log("Error", data);

    return { data, isSuccess: false };
  }
}
