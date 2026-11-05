export interface ShowcaseProduct {
  id: string;
  name: string;
  image: string;
}

export const showcaseProducts: ShowcaseProduct[] = [
  {
    id: "prod-biryani",
    name: "Special Dum Biryani",
    image: "/assets/images/biryani.png",
  },
  {
    id: "prod-dosa",
    name: "Crisp Masala Dosa",
    image: "/assets/images/dosa.png",
  },
  {
    id: "prod-idli",
    name: "Steamed Idli Sambar",
    image: "/assets/images/idli.png",
  },
  {
    id: "prod-indianthali",
    name: "Homestyle Indian Thali",
    image: "/assets/images/indianthali.png",
  },
  {
    id: "prod-muttonbiryani",
    name: "Handi Mutton Biryani",
    image: "/assets/images/muttonbiryani.png",
  },
  {
    id: "prod-thali",
    name: "Royal Restro Thali",
    image: "/assets/images/thali.png",
  },
];
