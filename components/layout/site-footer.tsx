import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  PROGRAM_NAME,
  SITE_NAME,
} from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-6 py-12 text-left md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-heading text-xl italic">{SITE_NAME}</p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            {PROGRAM_NAME} — a 9-week 1:1 coaching program for women ready to
            be recognized, and paid, for the work they already do brilliantly.
          </p>
        </div>
        <div className="text-sm text-muted-foreground md:text-right">
          <p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <a
            href={INSTAGRAM_URL}
            className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Instagram — @inesadita
          </a>
          <p className="mt-2">
            © {new Date().getFullYear()} Inesa Dita. All rights reserved.
          </p>
          <p className="mt-1 text-xs">
            Results vary and depend on individual effort.
          </p>
        </div>
      </div>
    </footer>
  );
}
