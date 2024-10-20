"use client";
import Image from "next/image";
import SquareCard from "./ui/squareCard";
import RectangleCard from "./ui/rectangleCard";

const testimonials = [
  {
    id: 1,
    name: "Jane Smith",
    role: "CEO, XYZ Enterprises",
    testimonial:
      "Santech exceeded our expectations. Their team not only delivered a seamless digital solution but also provided invaluable insights that helped streamline our processes.",
    image: "/testimonial.png",
  },
  {
    id: 2,
    name: "50+",
    role: "",
    testimonial:
      "Serving over 50 clients globally, Santech has helped businesses across multiple industries scale.",
    isHighlight: true,
  },
  {
    id: 3,
    testimonial:
      "Top-rated on Upwork for our exceptional work and strong client relationships.",
    image: "/images/upwork.png",
  },
  {
    id: 4,
    name: "Jane Smith",
    role: "CEO, XYZ Enterprises",
    testimonial:
      "Santech exceeded our expectations. Their team not only delivered a seamless digital solution but also provided invaluable insights that helped streamline our processes.",
    image: "/testimonial.png",
  },
];

export default function TestimonialsSection() {
  const firstTestimonial = testimonials[0]; // Extract the first testimonial

  return (
    <div className="lg:px-[80px] p-[24px] md:px-[32px] flex lg:flex-row flex-col-reverse items-center  gap-[20px] lg:gap-[20px] bg-[#EAEBEC]">
      <div className="flex flex-col gap-6 ">
        <div className="flex  flex-col md:flex-row gap-4">
          <SquareCard
            name={firstTestimonial.name}
            role={firstTestimonial.role}
            avatar={firstTestimonial.image}
            description={firstTestimonial.testimonial}
          />
          <RectangleCard
            heading="50+"
            paraline="Serving over 50 clients globally, Santech has helped businesses across multiple industries scale."
            headclr="font-[600]"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
            <RectangleCard
               headimg="/Rating.png"
               paraline="Serving over 50 clients globally, Santech has helped businesses across multiple industries scale."
               heading="upwork"
               headclr="font-[600]"
            />

            <div className="-mt-0 md:-mt-[153px]">
          <SquareCard
            name={firstTestimonial.name}
            role={firstTestimonial.role}
            avatar={firstTestimonial.image}
            description={firstTestimonial.testimonial}
          />
          </div>
        </div>

      </div>

      <p className="text-[24px] pl-0 lg:pl-[24px]  leading-[32px] w-full   mt-8 lg:mb-0  font-[400]">At Santech, we pride ourselves on delivering top-tier solutions that not only meet but exceed client expectations. Here’s what some of our satisfied clients have to say about their experience with us.</p>
    </div>
  );
}
