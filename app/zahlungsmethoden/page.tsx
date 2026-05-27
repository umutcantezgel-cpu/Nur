import { LegalLayout } from "@/components/layout/legal-layout";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Zahlungsmethoden",
  description: "Sichere und bequeme Zahlungsmöglichkeiten bei Nur.",
  noIndex: true,
});

export default function ZahlungsmethodenPage() {
  const paymentMethods = [
    { icon: "credit_card", name: "Apple Pay", description: "Zahlen Sie schnell und sicher mit Ihrem Apple-Gerät." },
    { icon: "qr_code", name: "PayPal", description: "Die einfache und sichere Zahlungsart. Auch mit PayPal Ratenkauf möglich." },
    { icon: "schedule", name: "Klarna (Rechnung / Ratenkauf)", description: "Erst die Ware erhalten, dann später bezahlen oder in bequemen Raten." },
    { icon: "payments", name: "Kreditkarte (Visa, Mastercard, AMEX)", description: "Sichere Abwicklung über unseren Zahlungsanbieter Stripe." },
  ];

  return (
    <LegalLayout title="Zahlungsmethoden">
      <p>
        Wir bieten Ihnen in unserem Shop vielfältige und sichere Zahlungsmöglichkeiten an, um Ihren Einkauf so angenehm wie möglich zu gestalten.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        {paymentMethods.map((method, idx) => (
          <div key={idx} className="bg-surface-variant/40 p-6 rounded-[20px] border border-outline-variant flex gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-text-secondary">
              <span className="material-symbols-outlined">{method.icon}</span>
            </div>
            <div>
              <h3 className="font-label-lg font-medium text-on-surface mb-1 -mt-1!">{method.name}</h3>
              <p className="font-body-sm text-text-secondary m-0!">{method.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Höchste Sicherheit für Ihre Daten</h2>
      <p>
        Bei Nur nehmen wir den Schutz Ihrer Zahlungsdaten ernst. Die gesamte Zahlungsabwicklung findet verschlüsselt nach den modernsten Sicherheitsstandards (SSL) statt. Wir speichern keine sensiblen Kreditkartendaten auf unseren eigenen Servern.
      </p>
    </LegalLayout>
  );
}
