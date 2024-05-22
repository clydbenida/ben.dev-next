import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-10 bg-gray-50 flex flex-col md:flex-row mt-10">
      <aside>
        <h1 className="text-4xl font-bold">ben.dev</h1>
        <p>{/* Insert catchphrase here */}</p>
        <nav className="footer-links mb-10">
          <h6 className="footer-title">Pages</h6>
          <Link href="/" className="link link-hover">
            Homepage
          </Link>
          <Link href="/blogs" className="link link-hover">
            Blogs
          </Link>
          <Link href="/projects" className="link link-hover">
            Projects
          </Link>
          <Link href="contact" className="link link-hover">
            Contact
          </Link>
        </nav>
      </aside>
      <nav className="flex-1 flex flex-row h-auto items-center md:justify-end">
        <div className="form-control">
          <form>
            <h3>Subscribe to newsletter</h3>
            <div className="input input-bordered flex items-center gap-2 pr-1 bg-white">
              <input type="email" name="email" placeholder="Email" />
              <button className="text-sm font-semibold text-white bg-slate-800 p-2 my-2 rounded-lg">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </nav>
    </footer>
  );
}
