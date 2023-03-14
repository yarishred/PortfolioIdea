//Import Images
import athlete from "../img/athlete-small.png";
import goodtimes from "../img/goodtimes-small.png";
import theracer from "../img/theracer-small.png";
import athlete2 from "../img/athlete2.png";
import goodtimes2 from "../img/good-times2.jpg";
import theracer2 from "../img/the-racer2.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: athlete,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores illo ipsum corporis earum voluptatum sint reprehenderit laboriosam aspernatur pariatur quia!",
      secondaryImg: athlete2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel, quaerat itaque est odit quis architecto reprehenderit qui. Iure modi sit quisquam quam voluptates minus. Veritatis deleniti at ut modi commodi, quidem mollitia placeat eaque iste rerum, eos natus quas?",
      url: "/work/good-times",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: theracer,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis assumenda dolore perspiciatis necessitatibus ex dignissimos laboriosam nihil inventore odit recusandae! Dolores quia magnam error beatae, hic facere ipsa natus tenetur est, dicta totam placeat delectus!", 
      url: "/work/the-racer",
      secondaryImg: theracer2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};