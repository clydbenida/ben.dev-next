import { cookies } from "next/headers";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  const canSendEmail = Boolean(cookies().get("canSendMail")?.value !== "false");

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col p-0 lg:flex-row-reverse">
        <div className="text-center lg:ml-14 lg:text-left pt-36">
          <h1 className="text-5xl font-bold">Want to reach me out?</h1>
          <p className="py-6">
            Feel free to send a message through this form. I'll get back to you as soon as I can!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <ContactForm canSendMail={canSendEmail} />
        </div>
      </div>
    </div>
  );
}
