import { Info } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import DocumentCard from "../components/DocumentCard";
import CTASection from "../components/CTASection";
import { documents, documentsNote } from "../data/documents";
import { images } from "../data/images";

export default function BrochuresPage() {
  return (
    <>
      <Seo
        title="Brochures & Downloads | Bajirao Villa, Karjat"
        description="View and download the Bajirao Villa information, amenities, packages, event and rules PDF brochures."
        path="/brochures"
        image={images.livingRoom}
      />

      <PageHero
        image={images.livingRoom}
        alt="Placeholder photograph of the villa living room"
        eyebrow="Brochures & downloads"
        title="The details, in writing"
        description="View or download a PDF summary of the villa, its amenities, packages and event information."
      />

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="mb-10 flex items-start gap-3 rounded-2xl border border-gold/30 bg-sand/40 p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
            <p className="text-xs leading-relaxed text-ink/65 sm:text-sm">{documentsNote}</p>
          </div>

          <SectionHeading
            eyebrow="Downloads"
            title="Villa documents"
            description="PDFs open in a new tab. On mobile, use your browser's share or save option to keep a copy."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((document) => (
              <DocumentCard key={document.href} document={document} />
            ))}
          </div>

          <p className="mt-8 text-xs leading-relaxed text-ink/50">
            Pricing is not published in these documents. For current rates and availability,
            please contact the team on WhatsApp.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
