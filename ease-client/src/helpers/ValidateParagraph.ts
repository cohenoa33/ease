export function validateParagraph(text: string): string {
  const validEndings = [".", "?", "!"];
  const lastChar = text.trim()[text.length - 1];
  if (lastChar in validEndings) return text;
  return `${text.trim()}.`;
}
