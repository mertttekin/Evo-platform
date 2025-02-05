"use client";
import React, { useState } from 'react';
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});


const tabs: string[] = ['Breaking News', 'Currencies', 'Commondities', 'Stock Markets', 'Economic Indicators'];

const newsData: { [key: string]: { image: string; title: string; description: string; }[] } = {
  'Breaking News': [
    { image: '/assets/news/news1.png', title: 'Title 1', description: 'Description 1' },
    { image: '/assets/news/news2.png', title: 'Title 2', description: 'Description 2' },
  ],
  'Currencies': [
    { image: '/assets/news/news1.png', title: 'Title 3', description: 'Description 3' },
    { image: '/assets/news/news2.png', title: 'Title 4', description: 'Description 4' },
  ],
  'Commondities': [
    { image: '/assets/news/news1.png', title: 'Title 3', description: 'Description 3' },
    { image: '/assets/news/news2.png', title: 'Title 4', description: 'Description 4' },
  ],
  'Stock Markets': [
    { image: '/assets/news/news1.png', title: 'Title 3', description: 'Description 3' },
    { image: '/assets/news/news2.png', title: 'Title 4', description: 'Description 4' },
  ],
  'Economic Indicators': [
    { image: '/assets/news/news1.png', title: 'Title 3', description: 'Description 3' },
    { image: '/assets/news/news2.png', title: 'Title 4', description: 'Description 4' },
  ],
  // Add more data for other tabs
};
export default function AllNews() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
  
    return (
      <div className={cn('bg-white p-4', roboto.className)}>
        <h1 className='text-xl font-bold'>All News</h1>
        <div className='border-b border-gray-300'>
          <div className='flex space-x-4 w-[320px] overflow-auto scrollbar-hide'>
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`py-2 ${activeTab === tab ? 'text-blue-500 border-b-2 whitespace-nowrap border-blue-500 text-[10px]' : 'text-gray-500 text-[10px]'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className='mt-4'>
          {newsData[activeTab].map((news, index) => (
            <div key={index} className='flex items-start space-x-4 mb-4'>
              <img src={news.image} alt={news.title} className='w-16 h-16 object-cover' />
              <div>
                <h2 className='text-lg font-semibold'>{news.title}</h2>
                <p className='text-gray-600'>{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }