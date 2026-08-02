"use client";

import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="overflow-hidden backdrop-blur-md transition-all duration-300"
            style={{
              borderRadius: isOpen ? "20px" : "100px",
              background: "#6B0078",
              boxShadow: "inset 5px 6px 4.5px 0px rgba(255, 254, 255, 0.25)",
            }}
          >
            <button
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between px-8 py-4 text-left text-base font-medium text-white sm:text-lg"
              onClick={() => toggle(index)}
              type="button"
            >
              <span>{faq.question}</span>
              <span
                className={`text-infest-white ml-4 flex h-8 w-8 shrink-0 items-center justify-center transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                  />
                </svg>
              </span>
            </button>

            {isOpen && (
              <div className="border-t border-white/10 px-8 py-5 text-sm leading-relaxed text-[#E5C7F7] sm:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
