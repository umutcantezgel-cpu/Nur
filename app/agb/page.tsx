import { LegalLayout } from "@/components/layout/legal-layout";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Allgemeine Geschäftsbedingungen",
  description: "Allgemeine Geschäftsbedingungen der Nur Manufaktur.",
});

export default function AGBPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen">
      <h2>1. Geltungsbereich</h2>
      <p>
        Für alle aktuellen und künftigen Geschäftsbeziehungen zwischen der Nur Manufaktur (im Folgenden "wir" oder "Verkäufer") und dem Verbraucher (im Folgenden "Kunde") gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Bestellung gültigen Fassung.
      </p>

      <h2>2. Vertragspartner und Vertragsschluss</h2>
      <p>
        Der Kaufvertrag kommt zustande mit der Nur Manufaktur. Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern einen unverbindlichen Online-Katalog dar. Durch Anklicken des Bestellbuttons geben Sie eine verbindliche Bestellung der im Warenkorb enthaltenen Waren ab.
      </p>

      <h2>3. Preise und Vorbestellungen (Pre-Order)</h2>
      <p>
        Die auf den Produktseiten genannten Preise enthalten die gesetzliche Mehrwertsteuer und sonstige Preisbestandteile. Da es sich bei unseren Kollektionen teilweise um Pre-Order-Artikel handelt, werden die spezifischen Produktions- und Lieferzeiten direkt auf der Produktseite ausgewiesen.
      </p>

      <h2>4. Handgefertigte Unikate</h2>
      <p>
        Wir weisen darauf hin, dass es sich bei einigen unserer Produkte (z.B. Koranhüllen, Gebetsteppiche) um handgefertigte Waren handelt. Leichte Abweichungen in Farbe, Muster oder Verarbeitung im Vergleich zu den Produktbildern sind kein Mangel, sondern ein Merkmal der individuellen Handwerkskunst aus Istanbul.
      </p>

      <h2>5. Eigentumsvorbehalt</h2>
      <p>
        Die Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.
      </p>
    </LegalLayout>
  );
}
