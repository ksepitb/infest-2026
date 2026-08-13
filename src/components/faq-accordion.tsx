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
    <div className="flex w-full flex-col gap-4">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="flex w-full flex-col overflow-hidden bg-[#6B0078] shadow-[inset_5px_6px_4.5px_0px_rgba(255,254,255,0.25)] backdrop-blur-md transition-all duration-300 ease-in-out"
            style={{ borderRadius: isOpen ? "20px" : "100px" }}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggle(index)}
              className="flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left text-base font-medium text-white sm:px-8 sm:text-lg"
            >
              <span className="pr-4">{faq.question}</span>
              <span
                className={`text-infest-white ml-4 flex h-8 w-8 shrink-0 items-center justify-center transition-transform duration-300 ease-in-out ${
                  isOpen ? "rotate-180" : "rotate-0"
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

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-white/10 px-6 py-5 text-sm leading-relaxed text-[#E5C7F7] sm:px-8 sm:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
