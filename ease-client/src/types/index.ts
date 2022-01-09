export interface Box {
  title: string;
  subTitle: string;
  text: string;
}

export interface ImageProps {
  src: string;
  alt: string;
}

export interface SingleBoxProps {
  text: string;
}

export interface WebData {
  title: string;
  subTitle: string;
  contact?: string;
}
