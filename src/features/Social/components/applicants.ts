import { Applicant } from "@/types/CreditEvalInfo";

export const applicants = [
  {
    firstName: "Peter",
    lastName: "Huber",
    country: "DE",
    creditScore: 50.4,
    creditScoreGroup: "C",
    imgPath: "https://xsgames.co/randomusers/assets/avatars/male/27.jpg",
    purchase: {
      products: [
        { name: "Mate Tea Hoodie Watch Product" },
        { name: "Bentley Watch" },
        { name: "Carhartt Hoodie" },
        { name: "Nike Fairplay ABC" },
        { name: "Carhartt Hoodie" },
        { name: "Nike Fairplay ABC" },
        { name: "Carhartt Hoodie" },
        { name: "Nike Fairplay ABC" },
        { name: "Carhartt Hoodie" },
        { name: "Nike Fairplay ABC" },
        { name: "Carhartt Hoodie" },
        { name: "Nike Fairplay ABC" },
        { name: "Carhartt Hoodie" },
        { name: "Nike Fairplay ABC" },
      ],
      totalSum: 380.99,
    },
  },
  {
    firstName: "Arnold",
    lastName: "Maier",
    country: "DE",
    creditScore: 20.3,
    creditScoreGroup: "D",
    imgPath: "https://xsgames.co/randomusers/assets/avatars/male/12.jpg",
    purchase: {
      products: [{ name: "Bentley Watch" }, { name: "Carhartt Hoodie" }],
      totalSum: 380.99,
    },
  },
  {
    firstName: "Kasimir",
    lastName: "Fretter",
    country: "DE",
    creditScore: 89,
    creditScoreGroup: "AA+",
    imgPath: "https://xsgames.co/randomusers/assets/avatars/male/21.jpg",
    purchase: {
      products: [
        { name: "Sneaker Nike" },
        { name: "Bentley Watch" },
        { name: "Carhartt Hoodie" },
        { name: "Nike Fairplay ABC" },
      ],
      totalSum: 380.99,
    },
  },
  {
    firstName: "Manfred",
    lastName: "Mustermann",
    country: "DE",
    creditScore: 14.1,
    creditScoreGroup: "E-",
    imgPath: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
    purchase: {
      products: [
        { name: "Harveys Jaquete" },
        { name: "Bentley Watch" },
        { name: "Carhartt Hoodie" },
        { name: "Nike Fairplay ABC" },
      ],
      totalSum: 380.99,
    },
  },
  {
    firstName: "Konstantin",
    lastName: "Palani",
    country: "DE",
    creditScore: 89.4,
    creditScoreGroup: "AAA",
    imgPath: "https://xsgames.co/randomusers/assets/avatars/male/49.jpg",
    purchase: {
      products: [
        { name: "Expensive clothing piece" },
        { name: "Bentley Watch" },
        { name: "Carhartt Hoodie" },
        { name: "Nike Fairplay ABC" },
        { name: "g" },
        { name: "g" },
        { name: "g" },
        { name: "g" },
      ],
      totalSum: 380.99,
    },
  },
] as Array<Applicant>;
