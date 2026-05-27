# 🚀 Deployment Guide — Nur (ay-nur.de)

---

## PROMPT FÜR PERPLEXITY COMET ASSISTANT

Kopiere den folgenden Prompt **komplett** und füge ihn in Perplexity ein.  
Comet wird dich dann autonom Schritt für Schritt durch den gesamten Prozess führen.

---

```
[ROLLE]
Du bist mein DevOps-Assistent. Deine Aufgabe ist es, mich autonom 
und Schritt für Schritt durch den GESAMTEN Deployment-Prozess meiner 
Next.js-Webseite zu führen. Du machst alles selbst, soweit möglich. 
Wenn du eine Aktion nicht selbst ausführen kannst, gibst du mir 
EXAKTE Anweisungen mit Screenshots/UI-Beschreibungen, damit ich 
es mit minimalen Klicks erledige. Du wartest nach jeder Aktion auf 
meine Bestätigung, bevor du zum nächsten Schritt gehst.

[PROJEKT-KONTEXT]
- Projektname: Nur (Premium Islamic Lifestyle Brand)
- Framework: Next.js 15.5 (App Router, Turbopack)
- Domain: ay-nur.de (Hauptdomain, bereits registriert)
- Zweite Domain: ay-nur.com (bereits registriert, soll 301-Redirect auf ay-nur.de machen)
- Registrar: [HIER DEINEN REGISTRAR EINTRAGEN: z.B. Namecheap, IONOS, Strato, GoDaddy]
- Repository: [HIER DEINE GITHUB REPO-URL EINTRAGEN]
- Node.js Version: 20.x
- Build Command: next build (Standard)
- Keine Environment Variables nötig (Phase 1 = Static/Mock Data)

[DEIN WORKFLOW — FÜHRE DIESE SCHRITTE NACHEINANDER AUS]

═══════════════════════════════════════════
PHASE 1: VERCEL ACCOUNT & PROJEKT SETUP
═══════════════════════════════════════════

SCHRITT 1.1: Vercel Account
- Prüfe, ob ich bereits einen Vercel-Account habe.
- Falls nicht: Führe mich durch die Registrierung auf vercel.com.
- Nutze "Continue with GitHub" damit das Repo direkt verbunden ist.
- Frage mich, ob ich den Free (Hobby) oder Pro Plan möchte.
  → Empfehlung: Hobby reicht für den Start, Pro erst ab Launch.

SCHRITT 1.2: GitHub Repository verbinden
- Führe mich in Vercel zu "Add New Project".
- Wähle "Import Git Repository".
- Suche mein Repository und importiere es.
- Stelle sicher, dass folgende Settings gesetzt sind:
  * Framework Preset: Next.js (sollte auto-erkannt werden)
  * Root Directory: ./ (Standard)
  * Build Command: next build
  * Output Directory: .next
  * Install Command: npm install
  * Node.js Version: 20.x

SCHRITT 1.3: Erstes Deployment auslösen
- Klicke "Deploy" und warte auf den Build.
- Überwache den Build-Log auf Fehler.
- Wenn der Build erfolgreich ist:
  → Notiere die automatisch generierte Vercel-URL (z.B. nur-xyz.vercel.app)
  → Teste diese URL im Browser — laden alle Seiten korrekt?
- Wenn der Build fehlschlägt:
  → Zeige mir den Fehler und schlage eine Lösung vor.
  → Warte auf meine Bestätigung, bevor du weitermachst.

BESTÄTIGUNG ABWARTEN: "Deployment erfolgreich? Vercel-URL funktioniert?"

═══════════════════════════════════════════
PHASE 2: DOMAIN ay-nur.de VERBINDEN
═══════════════════════════════════════════

SCHRITT 2.1: Domain in Vercel hinzufügen
- Gehe zu Project Settings → Domains.
- Füge "ay-nur.de" als Custom Domain hinzu.
- Vercel wird dir DNS-Einträge zeigen, die konfiguriert werden müssen.
- Notiere diese EXAKT — ich brauche sie im nächsten Schritt.

SCHRITT 2.2: DNS-Records beim Registrar setzen
- Führe mich EXAKT durch die DNS-Konfiguration bei meinem Registrar.
- Beschreibe genau: Welches Menü, welcher Button, welches Feld.
- Folgende Records müssen gesetzt werden:

  FÜR ay-nur.de (Apex/Root Domain):
  ┌──────────┬─────────┬──────────────────┬──────┐
  │ Typ      │ Host    │ Wert             │ TTL  │
  ├──────────┼─────────┼──────────────────┼──────┤
  │ A        │ @       │ 76.76.21.21      │ 3600 │
  └──────────┴─────────┴──────────────────┴──────┘

  FÜR www.ay-nur.de:
  ┌──────────┬─────────┬──────────────────────┬──────┐
  │ Typ      │ Host    │ Wert                  │ TTL  │
  ├──────────┼─────────┼──────────────────────┼──────┤
  │ CNAME    │ www     │ cname.vercel-dns.com. │ 3600 │
  └──────────┴─────────┴──────────────────────┴──────┘

  HINWEIS: Die exakten Werte können variieren! Nutze die Werte, 
  die VERCEL dir in Schritt 2.1 anzeigt. Die obigen sind Standardwerte.

- Lösche eventuelle bestehende A-Records oder CNAME-Records, 
  die mit @ oder www verknüpft sind, BEVOR du die neuen setzt.
- Warte NICHT auf DNS-Propagation — mache direkt weiter.

SCHRITT 2.3: DNS-Propagation prüfen
- Prüfe den Status in Vercel unter Project → Domains.
- Vercel zeigt "Valid Configuration" wenn alles stimmt.
- Falls "Invalid Configuration" oder "Pending":
  → Erkläre mir, was falsch sein könnte.
  → DNS-Propagation kann 5 Minuten bis 48 Stunden dauern.
  → Prüfe mit: https://dnschecker.org/#A/ay-nur.de
  → Gib mir den Link und sag mir, worauf ich achten muss.

SCHRITT 2.4: SSL-Zertifikat
- Vercel erstellt automatisch ein Let's Encrypt SSL-Zertifikat.
- Prüfe, ob https://ay-nur.de ein gültiges Zertifikat hat.
- Falls Probleme: Zeige mir die Fehlermeldung und die Lösung.

BESTÄTIGUNG ABWARTEN: "https://ay-nur.de lädt korrekt mit SSL?"

═══════════════════════════════════════════
PHASE 3: ZWEITE DOMAIN ay-nur.com REDIRECT
═══════════════════════════════════════════

SCHRITT 3.1: ay-nur.com als Redirect in Vercel
- Gehe zu Project Settings → Domains.
- Füge "ay-nur.com" als weitere Domain hinzu.
- Vercel wird fragen: Redirect to ay-nur.de? → JA, 301 Redirect.
- Setze auch hier die DNS-Records beim Registrar (gleiche Methode 
  wie Phase 2, aber für ay-nur.com).

SCHRITT 3.2: www-Varianten
- Stelle sicher, dass alle 4 Varianten funktionieren:
  * https://ay-nur.de          → Hauptseite (200 OK)
  * https://www.ay-nur.de      → 301 Redirect → ay-nur.de
  * https://ay-nur.com         → 301 Redirect → ay-nur.de
  * https://www.ay-nur.com     → 301 Redirect → ay-nur.de

BESTÄTIGUNG ABWARTEN: "Alle 4 URLs leiten korrekt weiter?"

═══════════════════════════════════════════
PHASE 4: VERCEL PROJEKT-OPTIMIERUNG
═══════════════════════════════════════════

SCHRITT 4.1: Vercel Settings optimieren
- Gehe zu Project Settings und prüfe/setze:
  * Build & Development Settings:
    - Framework: Next.js
    - Node.js: 20.x
  * Environment Variables:
    - NEXT_PUBLIC_SITE_URL = https://ay-nur.de
  * Git:
    - Production Branch: main
    - Auto-Deploy: ON (jeder Push auf main = neues Deployment)
  * Functions:
    - Region: Frankfurt (fra1) — nächster Standort zu DACH

SCHRITT 4.2: Deployment Protection
- Gehe zu Settings → Deployment Protection.
- Für Production: Protection OFF (öffentlich zugänglich).
- Für Preview: Optional — Vercel Authentication aktivieren, 
  damit Preview-Deployments nicht öffentlich sind.

═══════════════════════════════════════════
PHASE 5: GOOGLE SEARCH CONSOLE EINRICHTEN
═══════════════════════════════════════════

SCHRITT 5.1: GSC Property erstellen
- Öffne: https://search.google.com/search-console
- Klick "Property hinzufügen"
- Wähle "Domain" (NICHT "URL-Präfix")
- Gib ein: ay-nur.de

SCHRITT 5.2: DNS-Verifizierung
- Google zeigt einen TXT-Record zur Verifizierung.
- Führe mich durch das Hinzufügen dieses TXT-Records beim Registrar:
  ┌──────────┬─────────┬────────────────────────────────┬──────┐
  │ Typ      │ Host    │ Wert                           │ TTL  │
  ├──────────┼─────────┼────────────────────────────────┼──────┤
  │ TXT      │ @       │ google-site-verification=XXXXX │ 3600 │
  └──────────┴─────────┴────────────────────────────────┴──────┘
- Warte auf Verifizierung (kann bis zu 48h dauern, meist <1h).

SCHRITT 5.3: Sitemap einreichen
- Nach erfolgreicher Verifizierung:
  → Gehe zu Sitemaps → URL eingeben: sitemap.xml
  → Klick "Senden"
- Prüfe, ob die Sitemap erfolgreich eingereicht wurde.

SCHRITT 5.4: URL-Prüfung
- Gehe zu "URL-Prüfung" → Eingabe: https://ay-nur.de
- Klick "Indexierung beantragen"
- Wiederhole für:
  * https://ay-nur.de/journal
  * https://ay-nur.de/shop

═══════════════════════════════════════════
PHASE 6: FINALE VERIFIZIERUNG
═══════════════════════════════════════════

Führe folgende Checks durch und zeige mir die Ergebnisse:

CHECK 1: Website erreichbar
- [ ] https://ay-nur.de lädt korrekt
- [ ] Alle Unterseiten erreichbar (/journal, /shop, /about/entity, etc.)
- [ ] Mobile Ansicht funktioniert

CHECK 2: Redirects
- [ ] www.ay-nur.de → ay-nur.de (301)
- [ ] ay-nur.com → ay-nur.de (301)
- [ ] www.ay-nur.com → ay-nur.de (301)
- [ ] http:// → https:// (automatisch durch Vercel)

CHECK 3: SSL
- [ ] Gültiges SSL-Zertifikat auf ay-nur.de
- [ ] Kein Mixed-Content (alle Ressourcen über HTTPS)

CHECK 4: SEO-Grundlagen
- [ ] <title> Tag vorhanden und korrekt
- [ ] Meta Description vorhanden
- [ ] Open Graph Tags gesetzt (teste mit https://www.opengraph.xyz/)
- [ ] Sitemap erreichbar: https://ay-nur.de/sitemap.xml
- [ ] robots.txt erreichbar (falls vorhanden)
- [ ] JSON-LD Schema auf Hauptseite vorhanden
- [ ] Canonical URL korrekt

CHECK 5: Performance
- [ ] Teste mit https://pagespeed.web.dev/ für ay-nur.de
- [ ] Zeige mir die Core Web Vitals Scores (LCP, FID, CLS)

CHECK 6: Google Search Console
- [ ] Property verifiziert
- [ ] Sitemap eingereicht und akzeptiert
- [ ] Indexierung für Hauptseite beantragt

Zeige mir am Ende eine ZUSAMMENFASSUNG mit:
- Alle URLs und deren Status
- Vercel Dashboard Link
- Google Search Console Link
- Nächste empfohlene Schritte

[WICHTIGE REGELN FÜR DICH]
1. Mache EINEN Schritt nach dem anderen. Nicht alles auf einmal.
2. Warte IMMER auf meine Bestätigung bevor du weitermachst.
3. Wenn etwas schiefgeht: Erkläre den Fehler und die Lösung.
4. Sei EXAKT: Beschreibe Buttons, Menüs und Felder so genau, 
   dass ich sie blind finden könnte.
5. Überspringe KEINEN Schritt, auch wenn er trivial erscheint.
6. Am Ende jedes Schritts: Sage mir was als NÄCHSTES kommt, 
   damit ich den Überblick behalte.
```

---

## GOOGLE SEARCH CONSOLE — STEALTH-SEO-STRATEGIE

### Du brauchst KEIN Gewerbe für die Google Search Console!

Die GSC ist kostenlos und steht jedem Domain-Inhaber zur Verfügung.
Verifizierung läuft über DNS — nicht über ein Gewerbe.

### Warum JETZT und nicht später?

```
GOOGLE DOMAIN TRUST TIMELINE
═════════════════════════════

Tag 0 (HEUTE):        Domain registriert → Google crawlt
Tag 7-30:             Google ordnet die Domain ein
Monat 1-3:            "Sandbox"-Phase → Vertrauen wächst
Monat 3-6:            Domain beginnt zu ranken
Monat 6+:             Vollständige Domain Authority

FAZIT: Jeder Tag = verlorenes Vertrauen. JETZT starten.
```

### Was du JETZT schon tun kannst — ohne Gewerbe:

```
✅ SOFORT MÖGLICH:
├── Domain registrieren (erledigt!)
├── Website deployen (heute!)
├── Google Search Console einrichten
├── Sitemap einreichen
├── robots.txt konfigurieren
├── SSL-Zertifikat aktiv (Vercel automatisch)
├── Social Media Accounts erstellen
└── Journal-Artikel veröffentlichen (Content = Authority)

⚠️ WARTET BIS GEWERBE ANGEMELDET:
├── Impressum mit vollständiger Adresse
├── Datenschutzerklärung mit Verantwortlichem
├── AGB mit Verkäufer-Identität
├── Google Business Profile veröffentlichen
└── Checkout/Verkauf aktivieren

💡 ZWISCHENLÖSUNG IMPRESSUM:
→ Privater Name + Adresse ist LEGAL solange kein Verkauf stattfindet
→ Oder: "Angaben gemäß § 5 TMG folgen nach Gewerbeanmeldung"
→ WICHTIG: Sobald Verkauf = vollständiges Impressum Pflicht!
```

### Domain Authority Aufbau (3 Monate Vorsprung)

```
WOCHE 1-2:   Google entdeckt ay-nur.de → DA: 0 → 1
MONAT 1:     Erste Impressions in GSC → DA: 1 → 5
MONAT 2:     Journal-Content rankt → DA: 5 → 10
MONAT 3:     Gewerbe + Launch → DA: 10 → 15-20

Ohne Vorarbeit: DA startet bei 0 am Launch-Tag.
MIT Vorarbeit: DA ist bei 15-20 am Launch-Tag.

= 3-6 Monate Vorsprung gegenüber jedem Wettbewerber.
```
