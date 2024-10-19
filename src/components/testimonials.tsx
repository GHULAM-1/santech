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
    image: "/images/jane-smith.jpg",
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
    image: "/images/jane-smith.jpg",
  },
];

export default function TestimonialsSection() {
  const firstTestimonial = testimonials[0]; // Extract the first testimonial

  return (
    <div className="px-[80px] flex items-center py-[40px] gap-[36px] bg-[#EAEBEC]">
      <div className="flex flex-col gap-6 ">
        <div className="flex  gap-4">
          <SquareCard
            name={firstTestimonial.name}
            role={firstTestimonial.role}
            avatar={firstTestimonial.image}
            description={firstTestimonial.testimonial}
          />
          <RectangleCard
            heading="50+"
            paraline="Serving over 50 clients globally, Santech has helped businesses across multiple industries scale."
          />
        </div>

        <div className="flex gap-4">
            <RectangleCard
              heading="50+"
              paraline="Serving over 50 clients globally, Santech has helped businesses across multiple industries scale."
            />

            <div className="-mt-[140px]">
          <SquareCard
            name={firstTestimonial.name}
            role={firstTestimonial.role}
            avatar={firstTestimonial.image}
            description={firstTestimonial.testimonial}
          />
          </div>
        </div>

      </div>

      <p className="text-[23px] mt-8 font-[400]">At Santech, we pride ourselves on delivering top-tier solutions that not only meet but exceed client expectations. Here’s what some of our satisfied clients have to say about their experience with us.</p>
    </div>
  );
}
