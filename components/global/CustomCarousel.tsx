"use client";

import Image from "next/image";
import { FC, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselType = { image: string; title: string; subtitle: string }[];

const carouselItems: CarouselType = [
  {
    image: "/images/school1.png",
    title: "Streamline School Operations,",
    subtitle: "Simplify Educational Management",
  },
  {
    image: "/images/school2.png",
    title: "Empower Educators",
    subtitle: "With Intelligent Insights",
  },
  {
    image: "/images/school3.png",
    title: "Connect School Ecosystem",
    subtitle: "Seamless Communication Platform",
  },
];

export const CustomCarousel: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="w-full">
        {carouselItems.map((item, i: number) => (
          <div
            key={i}
            className={cn(
              "transition-all duration-700 fade-in-15",
              i === currentSlide ? "block" : "hidden"
            )}
          >
            <Image
              src={item.image}
              alt={`Image ${i + 1}`}
              width={1200}
              height={1200}
              className="object-contain object-center"
            />
          </div>
        ))}

        <div className="absolute bottom-0 w-[100%] mx-auto text-blue-500">
          {carouselItems.map((item, i: number) => (
            <div
              key={i}
              className={cn(i === currentSlide ? "block" : "hidden")}
            >
              <h2 className="text-xl font-bold text-center">{item.title}</h2>
              <p className="text-md font-light text-center">{item.subtitle}</p>
            </div>
          ))}

          <div className="text-center">
            {carouselItems.map((_, i: number) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={cn(
                  "w-2 h-2 transition-all rounded-full mr-2",
                  i === currentSlide ? "bg-blue-600 w-4" : "bg-blue-600/50"
                )}
              />
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-1 bg-gray-200/50 rounded-full text-blue-500/75 transition-colors "
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 bg-gray-200/50 rounded-full text-blue-500/75 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};
