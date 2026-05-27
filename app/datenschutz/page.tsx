import { LegalLayout } from "@/components/layout/legal-layout";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Nur Manufaktur.",
});

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <h2>1. Datenschutz auf einen Blick</h2>
      <p>
        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
      </p>

      <h2>2. Erfassung der E-Mail für die Warteliste</h2>
      <p>
        Wenn Sie sich für unsere Pre-Order-Warteliste oder unseren Newsletter eintragen, nutzen wir Ihre E-Mail-Adresse ausschließlich, um Sie über Neuigkeiten, Produktvorstellungen und exklusive Vorabzugänge zur Nur Kollektion zu informieren. 
      </p>
      <p>
        Ihre Daten werden nicht an Dritte weitergegeben. Sie können sich jederzeit aus der Warteliste oder unserem Verteiler austragen, indem Sie den Abmelde-Link im Fußbereich unserer E-Mails klicken.
      </p>

      <h2>3. Zahlungsdienstleister</h2>
      <p>
        Wir speichern keine Kreditkartendaten. Für die Zahlungsabwicklung nutzen wir Drittanbieter wie Stripe oder PayPal, die Ihre Daten nach den höchsten Sicherheitsstandards verarbeiten.
      </p>
    </LegalLayout>
  );
}
