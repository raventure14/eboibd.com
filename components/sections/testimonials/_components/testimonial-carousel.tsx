"use client";

import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "./testimonial-card";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "@/constants/testimonials";

export function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      stopOnMouseEnter: true,
    }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex mb-10 ">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                comment={testimonial.comment}
                rating={testimonial.rating}
                platform={testimonial.platform as "gmail" | "facebook"}
                className="mx-2"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={scrollNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* <div className="flex justify-center gap-2 mt-4">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex ? "bg-purple-600" : "bg-gray-300"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div> */}
    </div>
  );
}
