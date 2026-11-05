export interface ShowcaseProduct {
  id: string;
  name: string;
  image: string;
}

export const showcaseProducts: ShowcaseProduct[] = [
  {
    id: "prod-biryani",
    name: "Special Dum Biryani",
    image: "/assete/images/biryani.png",
  },
  {
    id: "prod-dosa",
    name: "Crisp Masala Dosa",
    image: "/assete/images/dosa.png",
  },
  {
    id: "prod-idli",
    name: "Steamed Idli Sambar",
    image: "/assete/images/idli.png",
  },
  {
    id: "prod-indianthali",
    name: "Homestyle Indian Thali",
    image: "/assete/images/indianthali.png",
  },
  {
    id: "prod-muttonbiryani",
    name: "Handi Mutton Biryani",
    image: "/assete/images/muttonbiryani.png",
  },
  {
    id: "prod-thali",
    name: "Royal Restro Thali",
    image: "/assete/images/thali.png",
  },
];
