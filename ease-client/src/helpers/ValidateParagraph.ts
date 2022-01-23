export function validateParagraph(text: string): string {
  const validEndings = [".", "?", "!"];
  const lastChar = text.trim()[text.length - 1];
  if (validEndings.includes(lastChar)) return text;
  return `${text.trim()}.`;
}
