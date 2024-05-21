"use client";

import { FormEvent } from "react";
import { sendMail } from "../actions";
import { ContactFormProps } from "@/types";

export default function ContactForm({ canSendMail }: ContactFormProps) {
  const handleSubmit = async (e: FormEvent) => {
    if (canSendMail) {
      e.preventDefault();
      if (e === undefined) {
        return;
      }
      const formData = new FormData(e?.target);

      formData.append("access_key", "d3e97c84-8887-439c-80b7-b7f9a6ad96ed");

      const { data, isSuccess } = await sendMail(formData);
    }
  };

  return (
    <form className="card-body" onSubmit={handleSubmit}>
      {!canSendMail && (
        <div className="absolute w-full h-full top-0 glass left-0 flex justify-center items-center px-10">
          <div>
            <p className="text-center text-3xl font-bold h-fit">
              You have already sent an email!
            </p>
            <p className="text-center">
              Please wait for another week to send another email, or send me a
              direct email to{" "}
              <a href="mailto:clyd.benidz@gmail.com">clyd.benidz@gmail.com</a>
            </p>
          </div>
        </div>
      )}
      <div className={!canSendMail ? "blur-md" : ""}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">From</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="input input-bordered mb-3"
            disabled={!canSendMail}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="input input-bordered"
            disabled={!canSendMail}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input
            type="text"
            placeholder="What do you want to talk about?"
            className="input input-bordered"
            name="subject"
            disabled={!canSendMail}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            required
            name="message"
            className="textarea textarea-bordered h-[15rem]"
            placeholder="Write your message here..."
            disabled={!canSendMail}
          />
        </div>
        <div className="form-control mt-6">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={!canSendMail}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
}
