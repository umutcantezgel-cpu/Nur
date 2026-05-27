import { LegalLayout } from "@/components/layout/legal-layout";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Impressum",
  description: "Impressum der Nur Manufaktur.",
});

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <p className="font-body-md text-text-secondary mb-8">
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
        Rabia Azize Tezgel<br />
        Lessingstraße 4<br />
        35578 Wetzlar<br />
        Deutschland
      </p>
      
      <h2>Kontakt</h2>
      <p className="font-body-md text-text-secondary mb-8">
        Telefon: +49 172 1751792<br />
        E-Mail: salam@ay-nur.de
      </p>
    </LegalLayout>
  );
}
