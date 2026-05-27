import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Über Nur | Fakten & Philosophie",
  description: "Erfahre mehr über Nur. Wer steht hinter Nur, wie produzieren wir in Istanbul und was bedeutet zugänglicher Luxus (Accessible Luxury)?",
  keywords: ["Nur", "Über uns", "Manufaktur Istanbul", "Accessible Luxury", "Islamic Lifestyle"],
});

export default function EntityPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wer steht hinter Nur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nur ist eine Premium-Marke für Islamic Lifestyle und Handcrafted Decor. Wir verstehen uns als eine Bewegung, die Spiritualität in moderner, minimalistischer Ästhetik verpackt."
        }
      },
      {
        "@type": "Question",
        "name": "Wo produziert Nur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Alle unsere Produkte werden in einer exklusiven Traditionsmanufaktur in Istanbul, Türkei, unter fairen Bedingungen in Handarbeit gefertigt."
        }
      },
      {
        "@type": "Question",
        "name": "Warum liegen die Preise bei Nur zwischen 30 und 45 Euro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir stehen für 'Accessible Luxury'. Wir bieten feinste Materialien, präzise Handarbeit aus Istanbul und eine luxuriöse Auspack-Erfahrung zu einem Preis, der für jeden zugänglich bleibt."
        }
      },
      {
        "@type": "Question",
        "name": "Wie funktioniert die Lieferung bei Nur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da wir viele Stücke in limitierten Drops oder über Pre-Order verkaufen, kann die Fertigung und Prüfung deines Unikats mitunter 3 bis 6 Wochen dauern. Die Lieferung erfolgt aus Deutschland klimaneutral per DHL GoGreen."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nur",
    "url": "https://ay-nur.de",
    "logo": "https://ay-nur.de/icon.png",
    "foundingLocation": "Deutschland",
    "description": "Premium Islamic Lifestyle & Handcrafted Decor. Accessible Luxury Handmade in Istanbul."
  };

  return (
    <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto flex-grow min-h-[70vh]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <h1 className="font-display-lg text-4xl lg:text-5xl text-on-surface mb-12 font-serif text-center">Entity & Brand Fact Sheet</h1>

      <div className="bg-surface-variant p-8 md:p-12 rounded-[32px] border border-outline-variant shadow-pink flex flex-col gap-12">
        
        <section>
          <h2 className="font-headline-md text-2xl text-primary font-serif mb-4">Wer steht hinter Nur?</h2>
          <p className="font-body-md text-text-secondary leading-relaxed">
            Nur ist mehr als ein klassischer Onlineshop. Wir sind eine Premium-Marke für Islamic Lifestyle und Handcrafted Decor. Unsere Philosophie basiert darauf, tiefgründige Spiritualität in moderne, reduzierte und hochästhetische Designs zu übersetzen. Wir kreieren Objekte, die beruhigen, fokussieren und einen Hauch von zeitloser Eleganz in dein Zuhause bringen.
          </p>
        </section>

        <section>
          <h2 className="font-headline-md text-2xl text-primary font-serif mb-4">Produktion in Istanbul</h2>
          <p className="font-body-md text-text-secondary leading-relaxed mb-4">
            Der Kern unserer Qualität liegt in der Türkei. Alle unsere Kollektionen werden in einer traditionsreichen Manufaktur im Herzen Istanbuls handgefertigt. Dort verschmelzen jahrhundertealtes Handwerkswissen und feine Textilverarbeitung mit unseren zeitgemäßen, minimalistischen Entwürfen. 
          </p>
          <p className="font-body-md text-text-secondary leading-relaxed">
            Dieser direkte Draht in die Manufaktur ermöglicht es uns, jedes Detail – von der Garnauswahl bis zum letzten Nadelstich – rigoros zu kontrollieren und faire, transparente Bedingungen zu garantieren.
          </p>
        </section>

        <section>
          <h2 className="font-headline-md text-2xl text-primary font-serif mb-4">Accessible Luxury (30-45 €)</h2>
          <p className="font-body-md text-text-secondary leading-relaxed">
            Eine Luxus-Erfahrung muss kein Vermögen kosten. Unter dem Leitgedanken &quot;Accessible Luxury&quot; positionieren wir unsere Produkte ganz bewusst im Segment zwischen 30 und 45 Euro. Dafür erhältst du nicht nur erstklassige Istanbuler Handarbeit und edle Materialien (wie Samt oder schwere Baumwolle), sondern auch ein Auspack-Erlebnis, das den Standards internationaler Premium-Label entspricht (Signature Kartonage, Schleifenband, Seidenpapier).
          </p>
        </section>

        <section>
          <h2 className="font-headline-md text-2xl text-primary font-serif mb-4">Lieferung & Pre-Order</h2>
          <p className="font-body-md text-text-secondary leading-relaxed mb-4">
            Um unseren hohen Qualitätsstandard bei jedem Stück zu wahren und Überproduktion zu vermeiden, arbeiten wir primär mit limitierten Drops und Pre-Order-Phasen.
          </p>
          <ul className="list-disc list-inside font-body-md text-text-secondary leading-relaxed ml-2 space-y-2">
            <li><strong>Der Prozess:</strong> Du sicherst dir dein Unikat. Daraufhin beginnt in Istanbul die Anfertigung.</li>
            <li><strong>Die Dauer:</strong> Handwerk braucht Zeit. Bitte rechne mit 3 bis 6 Wochen, bis dein Artikel unsere strenge Qualitätskontrolle durchlaufen hat und bei dir ist.</li>
            <li><strong>Der Versand:</strong> Verschickt wird aus unserem Logistikzentrum in Deutschland, schnell und klimaneutral mit DHL GoGreen.</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
