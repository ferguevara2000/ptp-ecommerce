"use client";

import { Tag, Shield, Headphones, Truck } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Tag className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
      title: "Hot Offers",
      description: "Discounts up to 90%",
    },
    {
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
      title: "Safety 100%",
      description: "Only secure payments",
    },
    {
      icon: <Headphones className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
      title: "Support 24/7",
      description: "Call us anytime",
    },
    {
      icon: <Truck className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
      title: "Free Shipping",
      description: "For orders from $150",
    },
  ];

  return (
    <div className="bg-gray-50 py-8 sm:py-10">
      <div className="container mx-auto px-4">
        <div
          className="
            flex gap-4 sm:gap-6 overflow-x-auto
            scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
            snap-x snap-mandatory
          "
        >
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="
                flex-shrink-0
                w-[250px] sm:w-[250px] md:w-1/4
                flex items-center space-x-4
                p-4 rounded-lg
                bg-white hover:bg-gray-100 transition
                snap-start
              "
            >
              <div
                className="
                  bg-red-100 text-red-500 rounded-full p-2 flex items-center justify-center
                  hover:bg-red-200 transition
                "
              >
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
