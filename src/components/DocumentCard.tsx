import { Download, FileText, ExternalLink } from "lucide-react";
import type { DocumentItem } from "../data/documents";

export default function DocumentCard({ document }: { document: DocumentItem }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-forest/10 bg-white p-6 transition hover:border-gold/40 hover:shadow-soft">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
        <FileText className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-2xl text-forest">{document.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{document.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href={document.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-forest/20 px-4 py-2 text-xs font-semibold text-forest transition hover:border-forest hover:bg-forest hover:text-cream"
        >
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          View PDF
        </a>
        <a
          href={document.href}
          download
          className="inline-flex items-center gap-1.5 rounded-full bg-forest/5 px-4 py-2 text-xs font-semibold text-forest transition hover:bg-gold/20"
        >
          <Download className="h-3.5 w-3.5" aria-hidden="true" />
          Download
        </a>
      </div>
    </div>
  );
}
