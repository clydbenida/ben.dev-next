import { cookies } from "next/headers";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  const canSendEmail = Boolean(cookies().get("canSendMail")?.value !== "false");

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:ml-14 lg:text-left">
          <h1 className="text-5xl font-bold">Want to reach me out?</h1>
          <p className="py-6">
            Feel free to reach me out if you have an amazing job opportunity for
            me! or if you have any comments or suggestions with this website or
            my projects
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <ContactForm canSendMail={canSendEmail} />
        </div>
      </div>
    </div>
  );
}
