import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

import VerificationEmail from "@/emailTemp/verifyEmail"; 

import { ApiResponse } from "@/types/apiResponse";

export default async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Verification Code",
      react: VerificationEmail({ username, otp:verifyCode }),
    });
    return { success: true, message: "Successfully  send verification email" };
  } catch (error) {
    return { success: false, message: "Failed to send verification email" };
  }
}
