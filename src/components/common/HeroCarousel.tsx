import React, { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

import image1 from "@/assets/plant-seedling.jpg";
import image2 from "@/assets/Colheita.jpeg";
import image3 from "@/assets/oleo.jpeg";
import image4 from "@/assets/children-wellness.jpg";

interface CarouselItemData {
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
}

const carouselData: CarouselItemData[] = [
  {
    title: "Medicina Natural",
    description: "Transformando vidas com o poder da natureza",
    image: image1,
    link: "/sobre",
    buttonText: "Saiba Mais",
  },
  {
    title: "Saúde e Bem-Estar",
    description: "Descubra a ciência por trás da medicina natural.",
    image: image2,
    link: "/artigos",
    buttonText: "Ver Artigos",
  },
  {
    title: "Saúde e Bem-Estar",
    description: "Descubra a ciência por trás da medicina natural.",
    image: image3,
    link: "/artigos",
    buttonText: "Ver Artigos",
  },
  {
    title: "Saúde e Bem-Estar",
    description: "Descubra a ciência por trás da medicina natural.",
    image: image4,
    link: "/artigos",
    buttonText: "Ver Artigos",
  },
];

const HeroCarousel: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, [api, setSelectedIndex]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
      setSelectedIndex(index);
    },
    [api]
  );

  return (
    <section className="relative w-full min-h-[20vh] overflow-hidden">
      <Carousel
        plugins={[Autoplay({ delay: 8000, stopOnInteraction: false })]}
        opts={{ loop: true }}
        className="w-full h-full"
        setApi={setApi}
      >
        <CarouselContent className="h-full">
          {carouselData.map((item, index) => (
            <CarouselItem key={index} className="relative h-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[480px] object-cover" // Set a fixed height and object-fit
              />
              <div className="absolute inset-0  flex flex-col items-center justify-start p-4 text-left pt-16 h-full">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {item.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                  {item.description}
                </p>
                <Link to={item.link}>
                  <Button variant="outline">{item.buttonText}</Button>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4" />
        <CarouselNext className="absolute right-4" />
      </Carousel>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              index === selectedIndex ? "bg-pink" : "bg-gray-100"
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
