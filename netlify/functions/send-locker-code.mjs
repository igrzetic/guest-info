import { getStore } from "@netlify/blobs";

const BRAND_NAME = "Krk | Vacation Villas";
const DEFAULT_FROM = `${BRAND_NAME} <info@vacation-villas-krk.com>`;

const EMAIL_COPY = {
  hr: {
    subject: `Šifra spremnika za ključ — ${BRAND_NAME}`,
    greeting: "Pozdrav,",
    intro:
      "Hvala što ste naš gost. Ovo je šifra spremnika za ključ na vašoj vili:",
    codeLabel: "Šifra spremnika",
    reminderTitle: "Važno",
    reminders: [
      "Postoji samo jedan ključ od kuće — vratite ga u spremnik pri svakom odlasku i na dan odjave.",
      "Ne mijenjajte šifru spremnika.",
      "Nakon korištenja uvijek poremetite brojeve na spremniku.",
    ],
    footer:
      "Vašu e-mail adresu koristimo isključivo za slanje ove šifre. Ako niste vi zatražili ovu poruku, možete je zanemariti.",
  },
  en: {
    subject: `Key locker code — ${BRAND_NAME}`,
    greeting: "Hello,",
    intro:
      "Thank you for being our guest. Here is the key locker code for your villa:",
    codeLabel: "Locker code",
    reminderTitle: "Important",
    reminders: [
      "There is only one house key — return it to the locker every time you leave and on checkout day.",
      "Do not change the locker code.",
      "Always scramble the numbers on the locker after use.",
    ],
    footer:
      "We use your email address solely to send this code. If you did not request this message, you can ignore it.",
  },
  it: {
    subject: `Codice cassetta chiavi — ${BRAND_NAME}`,
    greeting: "Ciao,",
    intro:
      "Grazie per essere nostro ospite. Ecco il codice della cassetta chiavi della vostra villa:",
    codeLabel: "Codice cassetta",
    reminderTitle: "Importante",
    reminders: [
      "C'è una sola chiave di casa — riportala nella cassetta ogni volta che esci e il giorno del check-out.",
      "Non cambiare il codice della cassetta.",
      "Mescola sempre i numeri sulla cassetta dopo l'uso.",
    ],
    footer:
      "Usiamo il tuo indirizzo e-mail esclusivamente per inviare questo codice. Se non hai richiesto questo messaggio, puoi ignorarlo.",
  },
  de: {
    subject: `Schlüsseltresor-Code — ${BRAND_NAME}`,
    greeting: "Hallo,",
    intro:
      "Vielen Dank, dass Sie unser Gast sind. Hier ist der Schlüsseltresor-Code für Ihre Villa:",
    codeLabel: "Tresor-Code",
    reminderTitle: "Wichtig",
    reminders: [
      "Es gibt nur einen Hausschlüssel — legen Sie ihn bei jedem Verlassen und am Abreisetag zurück in den Tresor.",
      "Ändern Sie nicht den Tresor-Code.",
      "Drehen Sie die Zahlen am Tresor nach Gebrauch immer durcheinander.",
    ],
    footer:
      "Wir verwenden Ihre E-Mail-Adresse ausschließlich zum Senden dieses Codes. Wenn Sie diese Nachricht nicht angefordert haben, können Sie sie ignorieren.",
  },
  sl: {
    subject: `Koda predala za ključ — ${BRAND_NAME}`,
    greeting: "Pozdravljeni,",
    intro: "Hvala, ker ste naš gost. To je koda predala za ključ na vaši vili:",
    codeLabel: "Koda predala",
    reminderTitle: "Pomembno",
    reminders: [
      "Obstaja samo en ključ od hiše — vrnite ga v predal ob vsakem odhodu in na dan odjave.",
      "Ne spreminjajte kode predala.",
      "Po uporabi vedno pomešajte številke na predalu.",
    ],
    footer:
      "Vaš e-poštni naslov uporabljamo izključno za pošiljanje te kode. Če tega sporočila niste zahtevali, ga lahko prezrete.",
  },
};

const SUPPORTED_LANGS = new Set(Object.keys(EMAIL_COPY));

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
    body: JSON.stringify(body),
  };
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildEmailHtml(copy, code) {
  const reminders = copy.reminders
    .map((item) => `<li style="margin:0 0 8px;">${item}</li>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f7f3ec;font-family:Georgia,'Times New Roman',serif;color:#2c2419;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f7f3ec;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border:1px solid #e8dfd1;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:28px 28px 8px;font-size:24px;line-height:1.3;color:#2c2419;">${BRAND_NAME}</td>
            </tr>
            <tr>
              <td style="padding:8px 28px 0;font-family:Inter,Arial,sans-serif;font-size:15px;line-height:1.6;color:#5c5348;">
                <p style="margin:0 0 16px;">${copy.greeting}</p>
                <p style="margin:0 0 20px;">${copy.intro}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 28px;">
                <div style="background:#f7f3ec;border:1px dashed #c8b9a4;border-radius:12px;padding:20px;text-align:center;">
                  <div style="font-family:Inter,Arial,sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#7a6f63;margin-bottom:8px;">${copy.codeLabel}</div>
                  <div style="font-size:36px;letter-spacing:0.24em;color:#2c2419;font-weight:600;">${code}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 28px 0;font-family:Inter,Arial,sans-serif;font-size:14px;line-height:1.6;color:#5c5348;">
                <p style="margin:0 0 8px;font-weight:600;color:#2c2419;">${copy.reminderTitle}</p>
                <ul style="margin:0;padding-left:20px;">${reminders}</ul>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 28px 28px;font-family:Inter,Arial,sans-serif;font-size:12px;line-height:1.5;color:#9a8f82;">
                ${copy.footer}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

async function hasEmailBeenSent(email) {
  const store = getStore("locker-sent-emails");
  const existing = await store.get(email, { type: "text" });
  return Boolean(existing);
}

async function markEmailSent(email) {
  const store = getStore("locker-sent-emails");
  await store.set(email, new Date().toISOString());
}

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "method_not_allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM || DEFAULT_FROM;
  const code = process.env.LOCKER_CODE;

  if (!apiKey || !code) {
    console.error("Missing RESEND_API_KEY or LOCKER_CODE");
    return json(503, { error: "email_not_configured" });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "invalid_json" });
  }

  const email = String(payload.email || "")
    .trim()
    .toLowerCase();
  const lang = SUPPORTED_LANGS.has(payload.lang) ? payload.lang : "en";

  if (!isValidEmail(email)) {
    return json(400, { error: "invalid_email" });
  }

  if (await hasEmailBeenSent(email)) {
    return json(409, { error: "already_sent" });
  }

  const copy = EMAIL_COPY[lang];
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [email],
      subject: copy.subject,
      html: buildEmailHtml(copy, code),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Resend error:", response.status, detail);
    return json(502, { error: "send_failed" });
  }

  await markEmailSent(email);

  return json(200, { ok: true });
}
