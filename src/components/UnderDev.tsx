import Link from "next/link";

export default function UnderDev() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl leading-relaxed font-bold">
            Nothing to see here... YET! 🚧
          </h1>
          <p className="py-6">
            This page is still under development. You can come back later to
            check in again.
          </p>
          <Link href="/" className="btn btn-primary">
            Go back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
