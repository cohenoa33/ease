import { ImageProps } from "../../types";

export function Image({ src, alt }: ImageProps) {
  return (
    <div className="strip">
      <img src={src} alt={alt} className="image" />
    </div>
  );
}
