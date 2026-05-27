import { LegalLayout } from "@/components/layout/legal-layout";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Widerrufsrecht",
  description: "Informationen zum Widerrufsrecht und Rückversand bei Nur.",
});

export default function WiderrufsrechtPage() {
  return (
    <LegalLayout title="Widerrufsrecht">
      <div className="bg-surface-variant p-8 rounded-[24px] border border-outline-variant mb-12 flex flex-col items-center text-center">
        <span className="material-symbols-outlined text-4xl text-primary mb-4 p-4 bg-surface rounded-full">undo</span>
        <h3 className="font-headline-md text-2xl font-serif mb-2">Rücksendung anmelden</h3>
        <p className="text-text-secondary font-body-md mb-6 max-w-md">
          Du möchtest einen Artikel zurückschicken? Melde deine Retoure ganz einfach hier an.
        </p>
        <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md uppercase tracking-widest hover:bg-on-surface transition-colors">
          Zum Retourenportal
        </button>
      </div>

      <h2>Widerrufsbelehrung</h2>
      <p>
        Verbraucher haben ein vierzehntägiges Widerrufsrecht.
      </p>

      <h3>Widerrufsrecht</h3>
      <p>
        Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
        Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat.
      </p>
      
      <p>
        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Nur Manufaktur, Lessingstraße 4, 35578 Wetzlar, E-Mail: salam@ay-nur.de) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
      </p>

      <h3>Folgen des Widerrufs</h3>
      <p>
        Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
      </p>

      <h3>Besondere Hinweise zu handgefertigten Sonderanfertigungen</h3>
      <p>
        Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind (z.B. personalisierte Stickereien).
      </p>
    </LegalLayout>
  );
}
