import type { WebData } from "../types";

export function Footer({ webData }: Props) {
  return (
    <div className="app-footer">
      <span className="footer-title">{webData.title}. </span>
      <span className="footer-sub-title">{webData.subTitle}</span>
      <div className="footer-text">{webData.contact}</div>
    </div>
  );
}
interface Props {
  webData: WebData;
}
