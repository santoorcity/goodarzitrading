export const WHATSAPP_NUMBER = "989191238554";

/** Build a WhatsApp deep link with a pre-filled message. */
export function whatsappLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/** Compose "Label: value" lines, dropping empty values. */
export function composeMessage(title: string, fields: Array<[string, string | undefined]>) {
  return [
    `*${title}*`,
    ...fields
      .filter(([, v]) => v && String(v).trim().length > 0)
      .map(([k, v]) => `${k}: ${v}`),
  ].join("\n");
}

/** Open WhatsApp with the message. Returns true if a window was opened. */
export function sendToWhatsApp(text: string) {
  const win = window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  if (!win) window.location.href = whatsappLink(text);
  return true;
}
