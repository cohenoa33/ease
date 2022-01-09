import type { Box } from "../types";
export const data = [
  {
    date: new Date(),
    title: "renew insurance",
    comments: [
      {
        comment: "compare quotes",
        date: new Date(new Date().setDate(new Date().getDate() - 5)),
        id: 1
      },
      {
        comment: "pay for policy",
        date: new Date(new Date().setDate(new Date().getDate() - 3)),
        id: 2
      }
    ]
  }
];

export const boxes: Box[] = [
  {
    title: "first",
    subTitle: "first subTitle",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    title: "second",
    subTitle: "second subTitle",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
  },
  {
    title: "third",
    subTitle: "third subTitle",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
  },
  {
    title: "fourth",
    subTitle: "fourth subTitle",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
  },
  {
    title: "fifth",
    subTitle: "fifth subTitle",
    text: "Lorem"
  },
  {
    title: "sixth",
    subTitle: "sixth subTitle",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
  },
  {
    title: "seventh",
    subTitle: "seventh subTitle",
    text: "It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it"
  }
  // {
  //   title: "eighth",
  //   subTitle: "eighth subTitle",

  //   text: "It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it"
  // }
];
