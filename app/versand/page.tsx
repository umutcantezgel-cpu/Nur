import { LegalLayout } from "@/components/layout/legal-layout";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Versand & Lieferung",
  description: "Informationen zu Versandkosten und Lieferzeiten bei Nur.",
  noIndex: true,
});

export default function VersandPage() {
  return (
    <LegalLayout title="Versand & Lieferung">
      <p>
        Wir versenden unsere Produkte mit größter Sorgfalt und in umweltfreundlicher Verpackung. Alle Bestellungen werden klimaneutral mit DHL GoGreen verschickt.
      </p>

      <h2>Versandkosten</h2>
      
      <div className="overflow-x-auto my-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-outline-variant">
              <th className="py-4 px-4 font-serif font-medium text-on-surface">Liefergebiet</th>
              <th className="py-4 px-4 font-serif font-medium text-on-surface">Versandkosten</th>
              <th className="py-4 px-4 font-serif font-medium text-on-surface">Kostenfreier Versand</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-outline-variant/30 hover:bg-surface-variant/30 transition-colors">
              <td className="py-4 px-4 font-body-md text-text-secondary">Deutschland</td>
              <td className="py-4 px-4 font-body-md text-text-secondary">4,90 €</td>
              <td className="py-4 px-4 font-body-md text-text-secondary">Ab 100 € Bestellwert</td>
            </tr>
            <tr className="border-b border-outline-variant/30 hover:bg-surface-variant/30 transition-colors">
              <td className="py-4 px-4 font-body-md text-text-secondary">Österreich</td>
              <td className="py-4 px-4 font-body-md text-text-secondary">9,90 €</td>
              <td className="py-4 px-4 font-body-md text-text-secondary">Ab 150 € Bestellwert</td>
            </tr>
            <tr className="hover:bg-surface-variant/30 transition-colors">
              <td className="py-4 px-4 font-body-md text-text-secondary">Schweiz</td>
              <td className="py-4 px-4 font-body-md text-text-secondary">14,90 €</td>
              <td className="py-4 px-4 font-body-md text-text-secondary">Ab 200 € Bestellwert</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Lieferzeiten</h2>
      <p>
        Soweit im jeweiligen Angebot keine andere Frist angegeben ist, erfolgt die Lieferung der Ware im Inland (Deutschland) innerhalb von 3 - 5 Tagen, bei Auslandslieferungen innerhalb von 5 - 7 Tagen nach Vertragsschluss (bei vereinbarter Vorauszahlung nach dem Zeitpunkt Ihrer Zahlungsanweisung).
      </p>
      
      <h3>Pre-Order & Warteliste</h3>
      <p>
        Bitte beachten Sie, dass für Artikel aus der exklusiven Pre-Order spezielle Produktionszeiten gelten. Da diese Stücke in unserer Manufaktur in Istanbul nach Auftragseingang per Hand gefertigt werden, kann die Lieferzeit hier zwischen 4-6 Wochen betragen. Die genaue voraussichtliche Lieferzeit wird stets transparent auf der jeweiligen Produktseite kommuniziert.
      </p>

      <h2>Sendungsverfolgung</h2>
      <p>
        Sobald Ihre Bestellung unser Lager verlässt, erhalten Sie eine Versandbestätigung per E-Mail mit einem Tracking-Link, über den Sie den Status Ihrer Sendung jederzeit verfolgen können. Sie können auch <a href="/tracking">unser Tracking-Portal</a> nutzen.
      </p>
    </LegalLayout>
  );
}
