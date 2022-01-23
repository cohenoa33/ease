export function titleCase(string: string, firstOnly?: boolean): string {
  if (firstOnly) {
    return titleWord(string);
  }

  return string
    .toLowerCase()
    .split(" ")
    .map((word: string) => titleWord(word))
    .join(" ");
}

function titleWord(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
