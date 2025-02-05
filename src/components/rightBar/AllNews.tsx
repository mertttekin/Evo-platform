"use client";

import React, { useState } from "react";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const tabs: string[] = [
  "Breaking News",
  "Currencies",
  "Commondities",
  "Stock Markets",
  "Economic Indicators",
];

const newsData: {
  [key: string]: { image: string; title: string; description: string }[];
} = {
  "Breaking News": [
    {
      image: "/assets/news/news1.png",
      title: "Title 1",
      description: "Description 1",
    },
    {
      image: "/assets/news/news2.png",
      title: "Title 2",
      description: "Description 2",
    },
  ],
  Currencies: [
    {
      image: "/assets/news/news1.png",
      title: "Title 3",
      description: "Description 3",
    },
    {
      image: "/assets/news/news2.png",
      title: "Title 4",
      description: "Description 4",
    },
  ],
  Commondities: [
    {
      image: "/assets/news/news1.png",
      title: "Title 3",
      description: "Description 3",
    },
    {
      image: "/assets/news/news2.png",
      title: "Title 4",
      description: "Description 4",
    },
  ],
  "Stock Markets": [
    {
      image: "/assets/news/news1.png",
      title: "Title 3",
      description: "Description 3",
    },
    {
      image: "/assets/news/news2.png",
      title: "Title 4",
      description: "Description 4",
    },
  ],
  "Economic Indicators": [
    {
      image: "/assets/news/news1.png",
      title: "Title 3",
      description: "Description 3",
    },
    {
      image: "/assets/news/news2.png",
      title: "Title 4",
      description: "Description 4",
    },
  ],
  // Add more data for other tabs
};
export default function AllNews() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className={cn("bg-white p-3 sm:p-4 w-full", roboto.className)}>
      <h1 className="text-lg sm:text-xl font-bold">All News</h1>
      <div className="border-b border-gray-300">
        <div className="flex space-x-2 sm:space-x-4 w-full overflow-x-auto scrollbar-hide py-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-1 sm:py-2 px-2 sm:px-3 ${
                activeTab === tab
                  ? "text-blue-500 border-b-2 whitespace-nowrap border-blue-500 text-[10px] sm:text-xs"
                  : "text-gray-500 text-[10px] sm:text-xs whitespace-nowrap"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-3 sm:mt-4">
        {newsData[activeTab].map((news, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4"
          >
            <Image
              width={48}
              height={48}
              src={news.image}
              alt={news.title}
              className=" sm:w-16 sm:h-16 object-cover rounded"
            />
            <div>
              <h2 className="text-base sm:text-lg font-semibold">
                {news.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {news.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
