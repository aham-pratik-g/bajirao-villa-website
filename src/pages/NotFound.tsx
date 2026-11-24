import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { waLink } from "../data/villa";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Bajirao Villa, Karjat"
        description="The page you were looking for could not be found. Return to Bajirao Villa or enquire on WhatsApp."
        path="/404"
      />
      <section className="flex min-h-[80svh] items-center justify-center bg-forest-900 px-5 py-32 text-center">
        <div className="max-w-xl">
          <p className="font-display text-8xl leading-none text-gold-light sm:text-9xl">404</p>
          <h1 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
            This page has checked out
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-cream/65">
            The page you were looking for does not exist. Head back to the villa or send us a
            message — we will point you in the right direction.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/" className="btn btn-gold">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to home
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
