import type { ReactNode } from "react";

export function Strip({ children }: StripProps) {
  return <div className={"strip"}>{children}</div>;
}

interface StripProps {
  children: ReactNode;
}
