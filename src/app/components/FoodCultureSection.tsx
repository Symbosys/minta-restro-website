"use client";

import React, { useEffect, useId, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

interface FoodCultureCardItem {
  id: string;
  titleTop?: string;
  titleMain: string;
  modalTitle?: string;
  shortDesc: string;
  fullStory: string | string[];
  regionTag: string;
  image: string;
  alt: string;
  waveStart: string;
  waveEnd: string;
  objectPosition: string;
  imgScale?: number;
  transformOrigin?: string;
  modalPosition?: string;
}

interface BiryaniVarietyItem {
  id: string;
  name: string;
  tag: string;
  desc: string;
  story: string[];
  cookingStyle: string;
  spices: string;
  image: string;
  isVeg?: boolean;
}

const biryaniVarieties: BiryaniVarietyItem[] = [
  {
    id: "egg-biryani",
    name: "Egg Biryani",
    tag: "Homestyle Comfort & Spiced Delight",
    desc: "Aromatic rice with perfectly spiced eggs.",
    story: [
      "Egg Biryani is a cherished classic that combines the comforting richness of boiled eggs with the royal grandeur of dum basmati rice. Each egg is lightly pan-roasted with turmeric, red chili and cumin until a golden blistered crust forms, locking in bold aromatic flavour.",
      "Layered with long-grain basmati, golden fried onions (birista), fresh mint, crushed saffron and freshly ground garam masala, it is slow-cooked on gentle dum to infuse every grain with exquisite aroma. Served traditionally with cool cucumber raita and spicy salan.",
    ],
    cookingStyle: "Slow Dum Infusion",
    spices: "Shahi Jeera, Star Anise, Green Cardamom & Mint",
    image: "/assets/images/biryanis/egg-biryani.jpg?v=2",
  },
  {
    id: "mutton-biryani",
    name: "Mutton Biryani",
    tag: "Slow Dum Nawabi Heritage",
    desc: "Rich and flavourful mutton biryani.",
    story: [
      "Our Royal Mutton Biryani is the pinnacle of traditional dum pukht cooking. Tender cuts of bone-in mutton are marinated for hours in rich yogurt, raw papaya, ginger-garlic paste and royal whole spices, ensuring succulent melt-in-the-mouth tenderness.",
      "Slow-cooked in sealed copper handis over charcoal embers, the juices from the marinated meat rise through fragrant layers of saffron-infused basmati rice. The result is an extraordinary harmony of deep richness, complex spices and lingering aroma.",
    ],
    cookingStyle: "Sealed Handi Dum Pukht",
    spices: "Mace (Javitri), Black Cardamom, Cloves & Pure Saffron",
    image: "/assets/images/biryanis/mutton-biryani.jpg?v=2",
  },
  {
    id: "local-chicken-biryani",
    name: "Local Chicken Biryani",
    tag: "Desi Spiced Country Flavour",
    desc: "Desi-style chicken biryani with bold spices.",
    story: [
      "Local Chicken Biryani celebrates the rustic, intense culinary traditions of Indian neighbourhoods. Prepared using farm-fresh country chicken cuts that carry deeper, robust meat flavours and hold spices exceptionally well.",
      "Cooked with mustard oil nuances, freshly stone-ground coriander, roasted cumin and fiery green chilies, this biryani offers a bold, punchy flavour profile distinct from mild palace styles. It is comforting, rich, and intensely satisfying.",
    ],
    cookingStyle: "Traditional Desi Dum",
    spices: "Stone-Ground Coriander, Clove, Cinnamon & Fiery Green Chili",
    image: "/assets/images/biryanis/local-chicken-biryani.jpg?v=2",
  },
  {
    id: "hyderabadi-chicken-biryani",
    name: "Hyderabadi Chicken Biryani",
    tag: "Nizami Royal Legacy",
    desc: "A royal dish with aromatic spices.",
    story: [
      "Originating from the royal kitchens of the Nizams, Hyderabadi Biryani is world-renowned for its perfected 'Kachchi Dum' technique. Raw, juicy chicken pieces are marinated overnight in thick curd, potli masala, fried onions and aromatic herbs.",
      "Parboiled aged basmati rice is layered directly over the raw marinated chicken, sealed with dough, and cooked on high heat then gentle dum so meat and rice cook together in their own trapped steam. Each bite delivers intense saffron fragrance and royal complexity.",
    ],
    cookingStyle: "Authentic Kachchi Dum",
    spices: "Potli Masala, Rose Petals, Saffron & Fried Onions (Birista)",
    image: "/assets/images/biryanis/hyderabadi-chicken-biryani.jpg?v=2",
  },
  {
    id: "kolkata-chicken-biryani",
    name: "Kolkata Chicken Biryani",
    tag: "Awadhi Royal Heritage in Bengal",
    desc: "Traditional style chicken biryani.",
    story: [
      "Brought to Kolkata by the exiled Nawab Wajid Ali Shah of Awadh, Kolkata Biryani is famous for its elegant subtlety, delicate aroma and the legendary melt-in-mouth slow-cooked whole potato (aloo).",
      "Unlike heavily spiced variants, Kolkata Biryani is lightly spiced with meetha attar (edible perfume), kewra water and nutmeg-mace powder. The large golden potato absorbs the savoury meat juices during dum, making it the most prized element on the plate.",
    ],
    cookingStyle: "Awadhi Pakki Dum",
    spices: "Meetha Attar, Kewra Water, Nutmeg (Jaiphal) & Mace (Javitri)",
    image: "/assets/images/biryanis/kolkata-chicken-biryani.jpg?v=2",
  },
  {
    id: "veg-biryani",
    name: "Veg Biryani",
    tag: "Garden Fresh Shahi Heritage",
    desc: "Fragrant rice with fresh vegetables.",
    story: [
      "A celebration of vegetarian culinary craft, our Shahi Veg Biryani brings together colourful garden-fresh vegetables, golden pan-seared paneer cubes, green peas, carrots, French beans and roasted cashews.",
      "Simmered with fragrant whole spices, brown onions, mint leaves and saffron milk, the vegetables retain their delicate sweetness and texture while absorbing the depth of the biryani masala. Wholesome, vibrant, and packed with royal aroma.",
    ],
    cookingStyle: "Shahi Handi Dum",
    spices: "Green Cardamom, Star Anise, Fresh Mint & Saffron Milk",
    image: "/assets/images/biryanis/veg-biryani.jpg?v=2",
    isVeg: true,
  },
];

interface SouthIndianVarietyItem {
  id: string;
  name: string;
  tag: string;
  desc: string;
  story: string[];
  image: string;
  isVeg?: boolean;
}

const southIndianVarieties: SouthIndianVarietyItem[] = [
  {
    id: "masala-dosa",
    name: "Masala Dosa",
    tag: "The Timeless South Indian Icon",
    desc: "Golden crispy crepe folded around spiced potato masala.",
    story: [
      "Recognized across the globe, the classic Masala Dosa is the undisputed royalty of South Indian culinary heritage. A delicate fermented batter of rice and lentils is spread in rhythmic concentric circles on a blazing hot flat tawa, developing a deep amber sheen.",
      "Inside lies the legendary potato masala—tender boiled potatoes tempered with mustard seeds, curry leaves, green chilies, onions and golden turmeric. Folded into a crisp cylindrical roll, every mouthful delivers the timeless crunch-and-comfort balance, complemented by aromatic sambar and cooling chutneys.",
    ],
    image: "/assets/images/south-indian/butter-masala-dosa-feast.jpg",
    isVeg: true,
  },
  {
    id: "golden-butter-rava-dosa",
    name: "Golden Butter Rava Dosa",
    tag: "Lacy Crisp & Pure Desi Butter",
    desc: "Crisp golden semolina crepe topped with aromatic fresh butter.",
    story: [
      "Golden Butter Rava Dosa is a celebratory South Indian delicacy cherished for its irresistible honeycomb texture and golden crunch. Prepared from an unfermented, delicately seasoned batter of roasted semolina, rice flour, crushed black peppercorns, cumin seeds, fresh green chilies and finely chopped ginger.",
      "Poured onto a piping-hot cast iron skillet, it forms a characteristic gossamer lacy web that turns supremely golden and crisp. Finished with a generous dollop of creamy white butter that gently melts across the hot surface, paired with piping hot drumstick sambar and freshly ground coconut and tomato chutneys.",
    ],
    image: "/assets/images/south-indian/golden-butter-rava-dosa.jpg",
    isVeg: true,
  },
  {
    id: "south-indian-uttapam",
    name: "South Indian Uttapam",
    tag: "Fluffy Griddle Pancake Heritage",
    desc: "Thick, savoury rice pancake topped with fresh onions, tomatoes & herbs.",
    story: [
      "Uttapam is a beloved classic across Tamil Nadu and South Indian households—a comforting, thick griddle pancake made from slow-fermented rice and urad dal batter. Soft, spongy, and golden on the base with an airy, cloud-like center.",
      "Generously studded with finely chopped red onions, juicy tomatoes, green chilies, cilantro and a hint of podi masala, each bite is a medley of soft warmth, subtle tang and fresh garden aromatics. Served with piping hot vegetable sambar and tangy coconut dip.",
    ],
    image: "/assets/images/south-indian/south-indian-uttapam.jpg",
    isVeg: true,
  },
  {
    id: "butter-paneer-masala-dosa",
    name: "Butter Paneer Masala Dosa",
    tag: "Rich Royal Fusion Feast",
    desc: "Crisp dosa packed with spiced cottage cheese masala & rich butter.",
    story: [
      "Butter Paneer Masala Dosa is an indulgent specialty combining the crispy finesse of South Indian dosa craft with the rich, velvety delight of spiced paneer. The crisp fermented golden shell is generously brushed with desi butter on the skillet.",
      "Filled to the brim with succulent cubes of soft cottage cheese tossed in a fragrant onion, tomato, capsicum and freshly ground aromatic spice mix, it melts into a luscious savory filling. Served sizzling hot with hot sambar and coconut-mint chutney.",
    ],
    image: "/assets/images/south-indian/butter-paneer-masala-dosa.jpg",
    isVeg: true,
  },
  {
    id: "butter-plain-dosa-feast",
    name: "Butter Plain Dosa Feast",
    tag: "Pure Simplicity & Golden Crunch",
    desc: "Golden, paper-thin buttery crepe served with sambar & fresh chutneys.",
    story: [
      "Butter Plain Dosa is pure culinary purity at its most refined. Stripped of heavy fillings, it places the spotlight entirely on the craft of the dosa crepe: golden, wafer-thin, and perfectly roasted with melted golden butter.",
      "Each bite offers a clean, buttery crunch with the gentle tang of naturally fermented rice and lentil batter. Served alongside steaming lentil-vegetable sambar, velvety coconut chutney and spicy tomato chutney for a wholesome, satisfying dining experience.",
    ],
    image: "/assets/images/south-indian/butter-masala-dosa-feast.jpg",
    isVeg: true,
  },
  {
    id: "crispy-rava-dosa",
    name: "Crispy Rava Dosa",
    tag: "Authentic Lacy Semolina Roast",
    desc: "Golden, thin and perforated semolina crepe roasted to perfection.",
    story: [
      "The hallmark of great South Indian tiffin, Crispy Rava Dosa is revered for its paper-thin, gossamer-crisp texture. Unlike traditional fermented dosas, Rava Dosa is crafted from seasoned semolina batter poured at high heat to achieve its signature intricate net-like holes.",
      "Lightly scented with curry leaves, asafoetida (hing), crushed peppercorns and roasted mustard seeds, it delivers an acoustic crunch with every single bite. Served fresh off the skillet alongside rich lentil sambar and creamy coconut chutney.",
    ],
    image: "/assets/images/south-indian/crispy-rava-dosa.jpg",
    isVeg: true,
  },

  {
    id: "south-indian-sambar-vada-feast",
    name: "South Indian Sambar Vada Feast",
    tag: "Traditional Temple-Style Dunked Delight",
    desc: "Crisp golden medu vadas steeped in aromatic vegetable sambar.",
    story: [
      "Sambar Vada is one of the most comforting and iconic breakfasts of South India. Golden, doughnut-shaped medu vadas are ground from soaked whole urad dal, whipped into an airy batter with cracked pepper, ginger and fresh curry leaves, and fried to golden perfection.",
      "The hot, crisp vadas are then immersed in a bubbling bowl of tangy drumstick and vegetable sambar, allowing them to drink in the spiced tamarind and toor dal broth until tender and juicy while preserving a soft savory bite. Garnished with fresh coriander and accompanied by cool coconut chutney.",
    ],
    image: "/assets/images/south-indian/south-indian-sambar-vada-feast.jpg",
    isVeg: true,
  },
  {
    id: "cheese-butter-masala-dosa-feast",
    name: "Cheese Butter Masala Dosa Feast",
    tag: "Gooey Melted Cheese Delight",
    desc: "Crispy buttery dosa loaded with gooey cheese & spiced potato filling.",
    story: [
      "Cheese Butter Masala Dosa brings a contemporary, decadent twist to traditional South Indian street culture. The golden dosa shell is roasted with golden butter and smothered with a savory spiced potato filling before being blanketed in generous shreds of fine cheese.",
      "The trapped heat melts the cheese into luscious gooey threads that mingle with the warm potato masala and buttery crunch of the crepe. Served piping hot with our signature drumstick sambar and zesty tomato and coconut chutneys.",
    ],
    image: "/assets/images/south-indian/cheese-butter-masala-dosa-feast.jpg",
    isVeg: true,
  },
  {
    id: "butter-masala-dosa-feast",
    name: "Butter Masala Dosa Feast",
    tag: "Golden Griddled Desi Butter Classic",
    desc: "Extra crisp dosa roasted in generous butter with potato masala.",
    story: [
      "For those who appreciate an extra level of decadence, Butter Masala Dosa elevates the classic recipe to pure indulgence. As the dosa crisps on the griddle, generous dollops of pure butter are drizzled along the perimeter and melted across the crepe surface.",
      "The rich butter deeply caramelizes the exterior into a glorious golden glaze while infusing the homestyle spiced aloo filling with irresistible buttery richness. Paired with steaming hot sambar and fresh coconut dip for an unforgettable feast.",
    ],
    image: "/assets/images/south-indian/butter-masala-dosa-feast.jpg",
    isVeg: true,
  },
  {
    id: "south-indian-idli-with-samber-chutney",
    name: "South Indian Idli With Samber Chutney",
    tag: "Steamed Rice & Lentil Cloud Classic",
    desc: "Pillowy soft steamed idlis served with fragrant sambar & chutneys.",
    story: [
      "Idli represents the epitome of healthy, time-honoured Indian gastronomy. Crafted from a meticulously fermented batter of parboiled rice and skinned black gram (urad dal), these snowy-white cakes are gently steam-cooked in traditional tiered steamers.",
      "Feather-light, naturally gluten-free and easily digestible, their gentle sponginess acts like a culinary sponge, soaking up fragrant spiced toor dal sambar and silky roasted coconut and red tomato-onion chutneys.",
    ],
    image:
      "/assets/images/south-indian/south-indian-idli-with-samber-chutney.jpg",
    isVeg: true,
  },
];

const foodCultureCards: FoodCultureCardItem[] = [
  {
    id: "authentic-biryani",
    titleMain: "The Art of Authentic Biryani",
    shortDesc:
      "An experience of aroma, spices, cooking techniques and tradition.",
    fullStory: [
      "Biryani is not simply a rice dish. It is an experience built around aroma, spices, cooking techniques and tradition. From flavourful Chicken Biryani and rich Mutton Biryani to regional variations inspired by Kolkata, Hyderabad and other culinary traditions, every Biryani has its own character.",
      "At Minta Restro, we celebrate the diversity of Biryani prepared by local food specialists, each bringing their own cooking style and distinctive flavours.",
    ],
    regionTag: "Slow Dum Heritage",
    image: "/assets/images/biryanis/kolkata-chicken-biryani.jpg",
    alt: "Hammered copper handi of Authentic Indian Biryani garnished with crispy onions and fresh mint",
    waveStart: "#613210",
    waveEnd: "#3b1c07",
    objectPosition: "50% 48%",
    modalPosition: "50% 48%",
  },
  {
    id: "meat-rice",
    titleMain: "Traditional Meat Rice",
    modalTitle: "Traditional Meat Rice – A Taste of Comfort",
    shortDesc:
      "A comforting meal of perfectly cooked rice, flavourful meat and aromatic spices.",
    fullStory: [
      "Some dishes do not need an introduction. Meat Rice is one of those comforting meals that brings together perfectly cooked rice, flavourful meat, aromatic spices and traditional preparation.",
      "Whether it is a regional Mutton Rice speciality or another traditional meat-based rice preparation, we believe these dishes deserve recognition beyond their local neighbourhoods.",
    ],
    regionTag: "Hearty Comfort Classic",
    image: "/assets/images/food-culture/mutton-curry-rice.jpg",
    alt: "Traditional clay pot slow-cooked mutton curry served with fragrant basmati rice, sliced onions and lemon on a steel thali",
    waveStart: "#5c2213",
    waveEnd: "#3a1309",
    objectPosition: "50% 34%",
    modalPosition: "50% 38%",
  },
  {
    id: "chicken-rice",
    titleMain: "Chicken Rice",
    modalTitle: "Chicken Rice – Simple, Delicious & Satisfying",
    shortDesc:
      "Simple, delicious & satisfying rice dishes prepared with aromatic spices and regional flavours.",
    fullStory: [
      "Chicken Rice represents the perfect combination of convenience and flavour. From traditional spicy preparations to regional chicken-and-rice combinations, it is a favourite for customers looking for a wholesome and satisfying meal.",
      "We want to bring different local interpretations of Chicken Rice to customers through our vendor network.",
    ],
    regionTag: "Everyday Neighbourhood Favourite",
    image: "/assets/images/food-culture/chicken-curry-rice.jpg",
    alt: "Rich home-style masala chicken curry served in a ceramic bowl alongside steamed white rice, onion and lime",
    waveStart: "#4c3e14",
    waveEnd: "#2e250a",
    objectPosition: "50% 34%",
    modalPosition: "50% 48%",
  },
  {
    id: "fish-rice",
    titleMain: "Fish Rice",
    modalTitle: "Fish Rice – Celebrating Regional Flavours",
    shortDesc:
      "Celebrating regional flavours from eastern and coastal regions.",
    fullStory: [
      "Fish has a special place in India's regional food traditions, especially across eastern and coastal regions. From traditional fish curry and rice combinations to local fish specialities, every preparation reflects the culinary identity of its region.",
      "Minta Restro aims to bring these familiar and loved flavours closer to customers.",
    ],
    regionTag: "Eastern & Coastal Heritage",
    image: "/assets/images/brand-story/fish-curry-rice.jpg",
    alt: "Regional spiced Indian fish curry thali served with steamed rice, crispy aloo bhaja, cucumber and lime",
    waveStart: "#12505c",
    waveEnd: "#09323a",
    objectPosition: "50% 14%",
    modalPosition: "50% 38%",
  },
  {
    id: "egg-rice",
    titleMain: "Egg Rice",
    modalTitle: "Egg Rice – Everyday Food, Extraordinary Taste",
    shortDesc:
      "Everyday food that combines affordability, flavour and satisfaction.",
    fullStory: [
      "Sometimes, the simplest meals create the strongest food memories. Egg Rice is an everyday favourite that combines affordability, flavour and satisfaction.",
      "Prepared in different regional styles, it offers customers a delicious meal option for different occasions.",
    ],
    regionTag: "Street & Home Staple",
    image: "/assets/images/food-culture/egg-curry-rice.jpg",
    alt: "Savory Indian egg masala curry with boiled eggs paired with fluffy white rice and fresh curry leaves",
    waveStart: "#3b4c1c",
    waveEnd: "#24300f",
    objectPosition: "50% 52%",
    modalPosition: "50% 50%",
  },
  {
    id: "south-indian-cuisine",
    titleMain: "South Indian Cuisine",
    modalTitle: "South Indian Cuisine – Tradition in Every Bite",
    shortDesc:
      "From crispy Dosa and soft Idli to Medu Vada, Uttapam, Sambar and traditional chutneys.",
    fullStory: [
      "South Indian cuisine is one of India's most loved culinary traditions. From crispy Dosa and soft Idli to Medu Vada, Uttapam, Sambar and traditional chutneys, these dishes reflect generations of culinary knowledge.",
      "Minta Restro brings these familiar South Indian favourites into its food ecosystem, giving customers more variety and opportunities to explore authentic regional cuisine.",
    ],
    regionTag: "Timeless Coastal & Southern Art",
    image: "/assets/images/south-indian/butter-paneer-masala-dosa.jpg",
    alt: "Crisp golden Butter Paneer Masala Dosa served on banana leaf with piping hot sambar and coconut chutney",
    waveStart: "#174b2a",
    waveEnd: "#0d2e19",
    objectPosition: "50% 56%",
    modalPosition: "50% 52%",
  },
];

export default function FoodCultureSection() {
  const uid = useId().replace(/:/g, "");
  const [selectedDish, setSelectedDish] = useState<FoodCultureCardItem | null>(
    null,
  );
  const [isBiryaniModalOpen, setIsBiryaniModalOpen] = useState(false);
  const [selectedBiryani, setSelectedBiryani] =
    useState<BiryaniVarietyItem | null>(null);
  const [isSouthIndianModalOpen, setIsSouthIndianModalOpen] = useState(false);
  const [selectedSouthIndian, setSelectedSouthIndian] =
    useState<SouthIndianVarietyItem | null>(null);

  useEffect(() => {
    if (
      !selectedDish &&
      !isBiryaniModalOpen &&
      !selectedBiryani &&
      !isSouthIndianModalOpen &&
      !selectedSouthIndian
    )
      return;
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedBiryani) {
          setSelectedBiryani(null);
        } else if (isBiryaniModalOpen) {
          setIsBiryaniModalOpen(false);
        } else if (selectedSouthIndian) {
          setSelectedSouthIndian(null);
        } else if (isSouthIndianModalOpen) {
          setIsSouthIndianModalOpen(false);
        } else if (selectedDish) {
          setSelectedDish(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    selectedDish,
    isBiryaniModalOpen,
    selectedBiryani,
    isSouthIndianModalOpen,
    selectedSouthIndian,
  ]);

  return (
    <section
      id="food"
      className="relative overflow-x-clip bg-white py-12 sm:py-16 lg:py-20 scroll-mt-16 sm:scroll-mt-20"
    >
      {/* Section Header */}
      <div className="relative z-10 mx-auto max-w-6xl xl:max-w-[1220px] 2xl:max-w-[1360px] px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-3 sm:gap-4">
          <span
            aria-hidden="true"
            className="h-[1px] w-10 sm:w-16"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #c58e26 100%)",
            }}
          />
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#a8731b]">
            Celebrating
          </span>
          <span
            aria-hidden="true"
            className="h-[1px] w-10 sm:w-16"
            style={{
              background:
                "linear-gradient(90deg, #c58e26 0%, transparent 100%)",
            }}
          />
        </div>

        <h2 className="mt-2 font-editorial-serif text-[26px] sm:text-[38px] lg:text-[44px] 2xl:text-[48px] font-extrabold leading-[1.15] tracking-tight text-[#092248]">
          India&apos;s Authentic Food Culture
        </h2>
        <p className="mx-auto mt-2.5 max-w-xl text-xs sm:text-sm lg:text-[15.5px] 2xl:text-base leading-relaxed text-[#334155]">
          India is a country of flavours, and Minta Restro wants to celebrate
          every delicious part of that diversity.
        </p>
      </div>

      {/* 6-Card Authentic Food Culture Grid */}
      <div className="relative z-10 mx-auto mt-8 sm:mt-10 lg:mt-12 max-w-6xl xl:max-w-[1220px] 2xl:max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7 2xl:gap-8">
          {foodCultureCards.map((dish) => {
            const waveGradId = `cultureWave-${uid}-${dish.id}`;
            return (
              <button
                key={dish.id}
                type="button"
                onClick={() => {
                  if (dish.id === "authentic-biryani") {
                    setIsBiryaniModalOpen(true);
                  } else if (dish.id === "south-indian-cuisine") {
                    setIsSouthIndianModalOpen(true);
                  } else {
                    setSelectedDish(dish);
                  }
                }}
                aria-label={`Explore ${
                  dish.titleTop ? `${dish.titleTop} ` : ""
                }${dish.titleMain}`}
                className="group relative flex h-[320px] sm:h-[335px] lg:h-[345px] w-full flex-col justify-end overflow-hidden rounded-2xl border border-[#e5d8bd]/85 bg-[#1b1510] text-left shadow-[0_14px_34px_rgba(9,32,68,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_46px_rgba(9,32,68,0.2)] cursor-pointer"
              >
                {/* Upper Culinary Photography */}
                <div className="absolute inset-x-0 top-0 h-[76%] overflow-hidden">
                  <div className="relative h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
                    <Image
                      src={dish.image}
                      alt={dish.alt}
                      fill
                      unoptimized
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 400px"
                      className="object-cover"
                      style={{
                        objectPosition: dish.objectPosition,
                        transform: dish.imgScale
                          ? `scale(${dish.imgScale})`
                          : undefined,
                        transformOrigin: dish.transformOrigin ?? "50% 60%",
                      }}
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(12,10,8,0.06) 0%, rgba(12,10,8,0) 48%, rgba(12,10,8,0.34) 100%)",
                    }}
                  />
                </div>

                {/* Bottom Colored Curved Wave Backdrop */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 400 176"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[170px] sm:h-[176px] w-full"
                >
                  <defs>
                    <linearGradient
                      id={waveGradId}
                      x1="0"
                      y1="0"
                      x2="400"
                      y2="176"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor={dish.waveStart} />
                      <stop offset="100%" stopColor={dish.waveEnd} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 28 C 90 -4, 215 44, 400 10 L 400 176 L 0 176 Z"
                    fill={`url(#${waveGradId})`}
                  />
                </svg>

                {/* Bottom Card Typography & Circular Gold Arrow */}
                <div className="relative z-10 flex items-end justify-between gap-3 px-5 pb-5 pt-6">
                  <div className="min-w-0">
                    <h3 className="text-[18px] sm:text-[19.5px] font-extrabold leading-[1.18] tracking-tight text-white">
                      {dish.titleTop && (
                        <>
                          <span>{dish.titleTop}</span>
                          <br />
                        </>
                      )}
                      <span>{dish.titleMain}</span>
                    </h3>
                    <p className="mt-1.5 line-clamp-3 text-[12px] sm:text-[12.5px] leading-[1.45] text-white/90">
                      {dish.shortDesc}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(180deg, #fae39c 0%, #e7ba5a 58%, #cb9022 100%)",
                    }}
                    className="mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#f5d57c]/80 text-[#092248] shadow-[0_6px_16px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-105"
                  >
                    <ArrowRight className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dedicated "Explore Our Biryanis" Specials Modal */}
      {isBiryaniModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-5 backdrop-blur-md"
          onClick={() => setIsBiryaniModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="explore-biryani-title"
        >
          <div
            className="relative max-h-[92vh] w-[96vw] sm:w-full max-w-xl sm:max-w-2xl overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden rounded-3xl border border-[#ebdcc3] bg-[#fcf9f2] p-4 sm:p-5 md:p-6 shadow-[0_25px_60px_rgba(9,34,72,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Corner Ornamental Flourishes */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute -top-3 -left-3 h-24 w-24 text-[#c58e26]/20 select-none"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path
                d="M0 0 L40 0 C40 22 22 40 0 40 Z"
                fill="currentColor"
                fillOpacity="0.04"
              />
              <path d="M0 0 Q50 0 50 50 Q0 50 0 0" strokeWidth="0.8" />
              <circle cx="22" cy="22" r="14" strokeDasharray="2 3" />
              <circle cx="22" cy="22" r="7" />
              <path d="M0 36 Q36 36 36 0" />
            </svg>
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 h-24 w-24 text-[#c58e26]/20 select-none rotate-180"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path
                d="M0 0 L40 0 C40 22 22 40 0 40 Z"
                fill="currentColor"
                fillOpacity="0.04"
              />
              <path d="M0 0 Q50 0 50 50 Q0 50 0 0" strokeWidth="0.8" />
              <circle cx="22" cy="22" r="14" strokeDasharray="2 3" />
              <circle cx="22" cy="22" r="7" />
              <path d="M0 36 Q36 36 36 0" />
            </svg>

            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => setIsBiryaniModalOpen(false)}
              aria-label="Close Explore Biryanis"
              className="absolute right-3 top-3 sm:right-4 sm:top-4 flex h-8 w-8 sm:h-8.5 sm:w-8.5 items-center justify-center rounded-full border border-[#d8c8ab]/70 bg-white/85 text-[#092248] shadow-sm hover:bg-white hover:scale-105 active:scale-95 transition-all cursor-pointer z-20"
            >
              <X className="h-4 w-4 stroke-[2.2]" />
            </button>

            {/* Header Content */}
            <div className="text-center pt-0.5 sm:pt-1">
              <span className="inline-block rounded-full border border-[#d6a849]/70 bg-gradient-to-r from-[#fae5a7] via-[#f7dea0] to-[#f4d17c] px-3.5 py-0.5 sm:py-1 text-[9.5px] sm:text-[10.5px] font-extrabold uppercase tracking-[0.22em] text-[#092248] shadow-sm">
                MINTA RESTRO SPECIALS
              </span>
              <h3
                id="explore-biryani-title"
                className="mt-1.5 sm:mt-2 font-editorial-serif text-xl sm:text-2xl lg:text-[28px] font-extrabold tracking-tight text-[#092248]"
              >
                Explore Our Biryanis
              </h3>
              <div className="mt-1 flex items-center justify-center gap-2.5 sm:gap-3">
                <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-r from-transparent to-[#c58e26]/70" />
                <p className="font-editorial-serif italic text-xs sm:text-sm text-[#6b5839]">
                  A flavour for every craving
                </p>
                <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-l from-transparent to-[#c58e26]/70" />
              </div>
            </div>

            {/* 6 Biryani Varieties Grid */}
            <div className="mt-3.5 sm:mt-4.5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {biryaniVarieties.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedBiryani(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedBiryani(item);
                    }
                  }}
                  className="group relative flex flex-col rounded-2xl border border-[#ebdcc3]/90 bg-[#fefaf3] p-2.5 sm:p-3 shadow-sm hover:border-[#c58e26]/70 hover:shadow-md transition-all duration-300 cursor-pointer select-none"
                >
                  {/* Biryani Dish Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#1b1510]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 300px"
                    />
                    {item.isVeg && (
                      <div className="absolute top-2 right-2 flex items-center justify-center rounded bg-white/95 p-1 shadow-sm">
                        <div className="flex h-3 w-3 items-center justify-center border-[1.5px] border-emerald-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Dish Details + Arrow on the Right */}
                  <div className="flex items-center justify-between gap-2.5 pt-2 sm:pt-2.5 px-0.5">
                    <div className="min-w-0 flex-1 text-left">
                      <h4 className="font-editorial-serif text-[14px] sm:text-[15.5px] font-bold text-[#092248] leading-tight truncate">
                        {item.name}
                      </h4>
                      <p className="mt-0.5 text-[11px] sm:text-[11.5px] leading-snug text-[#5b6b7f] line-clamp-1 sm:line-clamp-2">
                        {item.desc}
                      </p>
                    </div>

                    {/* Golden Circle Arrow next to text on the right */}
                    <span
                      style={{
                        background:
                          "linear-gradient(180deg, #fae39c 0%, #e7ba5a 58%, #cb9022 100%)",
                      }}
                      className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-[#f5d57c]/80 text-[#092248] shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5"
                    >
                      <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Tagline Divider */}
            <div className="mt-4 sm:mt-5 pt-3 border-t border-[#ebdcc3]/70 flex items-center justify-center gap-2.5 sm:gap-3 text-center">
              <span className="h-[1px] w-6 sm:w-12 bg-gradient-to-r from-transparent to-[#c58e26]/60" />
              <p className="font-editorial-serif italic text-xs sm:text-[12.5px] text-[#735e41] tracking-wide">
                Slow-cooked • Freshly prepared • Full of flavour
              </p>
              <span className="h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent to-[#c58e26]/60" />
            </div>
          </div>
        </div>
      )}

      {/* Individual Biryani Variety Detail Modal */}
      {selectedBiryani && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-3 sm:p-5 backdrop-blur-md"
          onClick={() => setSelectedBiryani(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="biryani-detail-title"
        >
          <div
            className="relative max-h-[92vh] w-[95vw] sm:w-full max-w-xl overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden rounded-2xl sm:rounded-3xl border border-[#ebdcc3] bg-[#fcf9f2] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Upper Culinary Photography */}
            <div className="relative h-60 sm:h-72 md:h-80 w-full overflow-hidden bg-[#1b1510]">
              <Image
                src={selectedBiryani.image}
                alt={selectedBiryani.name}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, 576px"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(9,34,72,0.18) 0%, rgba(9,34,72,0.72) 100%)",
                }}
              />

              {/* Navigation Buttons on Top of Image */}
              <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between z-10">
                <button
                  type="button"
                  onClick={() => setSelectedBiryani(null)}
                  aria-label="Back to all Biryanis"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-all hover:bg-[#092248] cursor-pointer"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to Biryanis</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedBiryani(null);
                    setIsBiryaniModalOpen(false);
                  }}
                  aria-label="Close Modal"
                  className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/40 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-[#092248] cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Title & Tag Overlay on Bottom of Image */}
              <div className="absolute bottom-4 left-5 right-5">
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded-full border border-[#d5a849]/75 bg-[#092248]/90 px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3cf7a]">
                    {selectedBiryani.tag}
                  </span>
                  {selectedBiryani.isVeg && (
                    <div className="flex items-center justify-center rounded bg-white/95 p-1 shadow-sm">
                      <div className="flex h-3 w-3 items-center justify-center border-[1.5px] border-emerald-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      </div>
                    </div>
                  )}
                </div>
                <h4
                  id="biryani-detail-title"
                  className="mt-1.5 font-editorial-serif text-2xl sm:text-[26px] font-bold text-white leading-tight"
                >
                  {selectedBiryani.name}
                </h4>
              </div>
            </div>

            {/* Modal Body: Story & Highlights */}
            <div className="p-5 sm:p-6">
              {/* Story Paragraphs */}
              <div className="space-y-3 text-sm sm:text-[14.5px] leading-relaxed text-[#273244]">
                {selectedBiryani.story.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Modal Action Buttons */}
              <div className="mt-6 flex items-center justify-between gap-3 pt-3 border-t border-[#ebdcc3]/70">
                <button
                  type="button"
                  onClick={() => setSelectedBiryani(null)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#092248] hover:text-[#c58e26] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>View All Biryanis</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedBiryani(null);
                    setIsBiryaniModalOpen(false);
                  }}
                  style={{
                    background:
                      "linear-gradient(180deg, #f9e39d 0%, #e7ba5a 58%, #cf982c 100%)",
                  }}
                  className="rounded-full border border-[#c58e26]/65 px-5 py-2 text-xs sm:text-sm font-bold text-[#092248] shadow-sm transition-transform duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated "Explore South Indian Delicacies" Specials Modal */}
      {isSouthIndianModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-5 backdrop-blur-md"
          onClick={() => setIsSouthIndianModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="explore-south-indian-title"
        >
          <div
            className="relative max-h-[92vh] w-[96vw] sm:w-full max-w-xl sm:max-w-2xl overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden rounded-3xl border border-[#ebdcc3] bg-[#fcf9f2] p-4 sm:p-5 md:p-6 shadow-[0_25px_60px_rgba(9,34,72,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Corner Ornamental Flourishes */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute -top-3 -left-3 h-24 w-24 text-[#c58e26]/20 select-none"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path
                d="M0 0 L40 0 C40 22 22 40 0 40 Z"
                fill="currentColor"
                fillOpacity="0.04"
              />
              <path d="M0 0 Q50 0 50 50 Q0 50 0 0" strokeWidth="0.8" />
              <circle cx="22" cy="22" r="14" strokeDasharray="2 3" />
              <circle cx="22" cy="22" r="7" />
              <path d="M0 36 Q36 36 36 0" />
            </svg>
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 h-24 w-24 text-[#c58e26]/20 select-none rotate-180"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path
                d="M0 0 L40 0 C40 22 22 40 0 40 Z"
                fill="currentColor"
                fillOpacity="0.04"
              />
              <path d="M0 0 Q50 0 50 50 Q0 50 0 0" strokeWidth="0.8" />
              <circle cx="22" cy="22" r="14" strokeDasharray="2 3" />
              <circle cx="22" cy="22" r="7" />
              <path d="M0 36 Q36 36 36 0" />
            </svg>

            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setIsSouthIndianModalOpen(false)}
              aria-label="Close South Indian Specials"
              className="absolute right-4 top-4 z-10 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-[#d5a849]/60 bg-[#f8f1e2] text-[#092248] shadow-sm transition-colors hover:bg-[#092248] hover:text-white cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header: Title & Subtitle */}
            <div className="relative text-center px-4 pt-1 sm:pt-2">
              <span className="inline-block rounded-full border border-[#c58e26]/50 bg-[#faeed8] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#935d10]">
                Minta Restro Specials
              </span>
              <h3
                id="explore-south-indian-title"
                className="mt-1.5 sm:mt-2 font-editorial-serif text-xl sm:text-2xl lg:text-[28px] font-extrabold tracking-tight text-[#092248]"
              >
                Explore South Indian Cuisine
              </h3>
              <div className="mt-1 flex items-center justify-center gap-2.5 sm:gap-3">
                <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-r from-transparent to-[#c58e26]/70" />
                <p className="font-editorial-serif italic text-xs sm:text-sm text-[#6b5839]">
                  Tradition in every bite
                </p>
                <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-l from-transparent to-[#c58e26]/70" />
              </div>
            </div>

            {/* 10 South Indian Varieties Grid */}
            <div className="mt-3.5 sm:mt-4.5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {southIndianVarieties.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedSouthIndian(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedSouthIndian(item);
                    }
                  }}
                  className="group relative flex flex-col rounded-2xl border border-[#ebdcc3]/90 bg-[#fefaf3] p-2.5 sm:p-3 shadow-sm hover:border-[#c58e26]/70 hover:shadow-md transition-all duration-300 cursor-pointer select-none"
                >
                  {/* Dish Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#1b1510]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 300px"
                    />
                    {item.isVeg && (
                      <div className="absolute top-2 right-2 flex items-center justify-center rounded bg-white/95 p-1 shadow-sm">
                        <div className="flex h-3 w-3 items-center justify-center border-[1.5px] border-emerald-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Dish Details + Arrow on the Right */}
                  <div className="flex items-center justify-between gap-2.5 pt-2 sm:pt-2.5 px-0.5">
                    <div className="min-w-0 flex-1 text-left">
                      <h4 className="font-editorial-serif text-[14px] sm:text-[15.5px] font-bold text-[#092248] leading-tight truncate">
                        {item.name}
                      </h4>
                      <p className="mt-0.5 text-[11px] sm:text-[11.5px] leading-snug text-[#5b6b7f] line-clamp-1 sm:line-clamp-2">
                        {item.desc}
                      </p>
                    </div>

                    {/* Golden Circle Arrow next to text on the right */}
                    <span
                      style={{
                        background:
                          "linear-gradient(180deg, #fae39c 0%, #e7ba5a 58%, #cb9022 100%)",
                      }}
                      className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-[#f5d57c]/80 text-[#092248] shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5"
                    >
                      <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Tagline Divider */}
            <div className="mt-4 sm:mt-5 pt-3 border-t border-[#ebdcc3]/70 flex items-center justify-center gap-2.5 sm:gap-3 text-center">
              <span className="h-[1px] w-6 sm:w-12 bg-gradient-to-r from-transparent to-[#c58e26]/60" />
              <p className="font-editorial-serif italic text-xs sm:text-[12.5px] text-[#735e41] tracking-wide">
                Golden-roasted • Steamed to perfection • Freshly prepared
              </p>
              <span className="h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent to-[#c58e26]/60" />
            </div>
          </div>
        </div>
      )}

      {/* Individual South Indian Variety Detail Modal */}
      {selectedSouthIndian && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-3 sm:p-5 backdrop-blur-md"
          onClick={() => setSelectedSouthIndian(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="south-indian-detail-title"
        >
          <div
            className="relative max-h-[92vh] w-[95vw] sm:w-full max-w-xl overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden rounded-2xl sm:rounded-3xl border border-[#ebdcc3] bg-[#fcf9f2] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Upper Culinary Photography */}
            <div className="relative h-60 sm:h-72 md:h-80 w-full overflow-hidden bg-[#1b1510]">
              <Image
                src={selectedSouthIndian.image}
                alt={selectedSouthIndian.name}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, 576px"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(9,34,72,0.22) 0%, rgba(9,34,72,0.1) 40%, rgba(9,34,72,0.85) 100%)",
                }}
              />

              {/* Navigation Bar inside Header */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <button
                  type="button"
                  onClick={() => setSelectedSouthIndian(null)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-all hover:bg-[#092248] cursor-pointer"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to South Indian</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedSouthIndian(null);
                    setIsSouthIndianModalOpen(false);
                  }}
                  aria-label="Close Modal"
                  className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/40 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-[#092248] cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Title & Tag Overlay on Bottom of Image */}
              <div className="absolute bottom-4 left-5 right-5">
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded-full border border-[#d5a849]/75 bg-[#092248]/90 px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3cf7a]">
                    {selectedSouthIndian.tag}
                  </span>
                  {selectedSouthIndian.isVeg && (
                    <div className="flex items-center justify-center rounded bg-white/95 p-1 shadow-sm">
                      <div className="flex h-3 w-3 items-center justify-center border-[1.5px] border-emerald-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      </div>
                    </div>
                  )}
                </div>
                <h4
                  id="south-indian-detail-title"
                  className="mt-1.5 font-editorial-serif text-2xl sm:text-[26px] font-bold text-white leading-tight"
                >
                  {selectedSouthIndian.name}
                </h4>
              </div>
            </div>

            {/* Modal Body: Story */}
            <div className="p-5 sm:p-6">
              {/* Story Paragraphs */}
              <div className="space-y-3 text-sm sm:text-[14.5px] leading-relaxed text-[#273244]">
                {selectedSouthIndian.story.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Modal Action Buttons */}
              <div className="mt-6 flex items-center justify-between gap-3 pt-3 border-t border-[#ebdcc3]/70">
                <button
                  type="button"
                  onClick={() => setSelectedSouthIndian(null)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#092248] hover:text-[#c58e26] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>View All Delicacies</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedSouthIndian(null);
                    setIsSouthIndianModalOpen(false);
                  }}
                  style={{
                    background:
                      "linear-gradient(180deg, #f9e39d 0%, #e7ba5a 58%, #cf982c 100%)",
                  }}
                  className="rounded-full border border-[#c58e26]/65 px-5 py-2 text-xs sm:text-sm font-bold text-[#092248] shadow-sm transition-transform duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Culinary Story Detail Modal When Card Is Clicked */}
      {selectedDish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-3 sm:p-5 backdrop-blur-sm"
          onClick={() => setSelectedDish(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="food-culture-dish-title"
        >
          <div
            className="relative max-h-[92vh] w-[95vw] sm:w-full max-w-xl overflow-y-auto rounded-2xl sm:rounded-3xl border border-[#e2ecf7] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-60 sm:h-80 md:h-[360px] w-full overflow-hidden">
              <Image
                src={selectedDish.image}
                alt={selectedDish.alt}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, 576px"
                className="object-cover"
                style={{
                  objectPosition: selectedDish.modalPosition ?? "50% 58%",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(9,34,72,0.12) 0%, rgba(9,34,72,0.68) 100%)",
                }}
              />
              <button
                type="button"
                onClick={() => setSelectedDish(null)}
                aria-label="Close Dish Story"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-[#092248] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="absolute bottom-4 left-5 right-5">
                <span className="inline-block rounded-full border border-[#d5a849]/75 bg-[#092248]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3cf7a]">
                  {selectedDish.regionTag}
                </span>
                <h4
                  id="food-culture-dish-title"
                  className="mt-2 font-editorial-serif text-2xl sm:text-[28px] font-bold text-white"
                >
                  {selectedDish.modalTitle ??
                    `${selectedDish.titleTop ? `${selectedDish.titleTop} ` : ""}${selectedDish.titleMain}`}
                </h4>
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <div className="space-y-3.5 text-sm sm:text-[15.5px] leading-relaxed text-[#273244]">
                {(Array.isArray(selectedDish.fullStory)
                  ? selectedDish.fullStory
                  : [selectedDish.fullStory]
                ).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedDish(null)}
                  style={{
                    background:
                      "linear-gradient(180deg, #f9e39d 0%, #e7ba5a 58%, #cf982c 100%)",
                  }}
                  className="rounded-full border border-[#c58e26]/65 px-6 py-2.5 text-xs sm:text-sm font-bold text-[#092248] shadow-sm transition-transform duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
