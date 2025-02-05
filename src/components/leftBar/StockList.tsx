"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";
import type { CombinedStock } from "@/contexts/StockContext";
import { useStock } from "@/hooks/use-stock-context";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface Stock {
  symbol: string;
  name: string;
  flag_url: string;
  buy: number;
  sell: number;
}

interface StockData {
  stocks: Stock[];
}


interface StockListProps {
  searchTerm: string;
}

export default function StockList({ searchTerm }: StockListProps) {
  const [data, setData] = useState<StockData | null>(null);
  const [combinedData, setCombinedData] = useState<CombinedStock[]>([]);
  const {changeStock} = useStock();
  
  useEffect(() => {
    fetch("/data/stockData.json")
      .then((response) => {
        if(!response.ok) throw new Error('Status: '+ response.status);

        return response.json();
      })
      .then((data) => {
        setData(data);
        combineStocks(data.stocks);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const combineStocks = (stocks: Stock[]) => {
    const combined: CombinedStock[] = [];
    for (let i = 0; i < stocks.length; i++) {
      for (let j = 0; j < stocks.length; j++) {
        if (i !== j) {
          combined.push({
            pair: `${stocks[i].symbol}${stocks[j].symbol}`,
            buy: stocks[i].buy,
            sell: stocks[j].sell,
            flag_url_from: stocks[i].flag_url,
            flag_url_to: stocks[j].flag_url,
          });
        }
      }
    }
    setCombinedData(combined);
  };

  const filteredData = combinedData.filter((stock) =>
    stock.pair.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!data) {
    return <div className="bg-white">Loading...</div>;
  }

  return (
    <div
      className={cn(
        "bg-white px-1 py-4 divide-gray-300 text-[14px] text-[#3E4650]  overflow-y-auto",
        roboto.className
      )}
    >
      {filteredData.map((stock) => (
        <div  key={stock.pair} onClick={()=>{changeStock(stock)}}>
          <div className="rounded-xl px-4 py-2 hover:bg-[#E8EFFD] hover:border-l-2 flex justify-between items-center hover:border-blue-600 group cursor-pointer">
            <div className="flex items-center space-x-2">
              <div className="relative w-[26px] h-[34px]">
                <Image
                  className="border-white border-1 rounded-full absolute top-0 right-0"
                  alt=""
                  height={20}
                  width={20}
                  src={stock.flag_url_to}
                />
                <Image
                  className="border-white border-1 rounded-full absolute bottom-0 left-0"
                  alt=""
                  height={20}
                  width={20}
                  src={stock.flag_url_from}
                />
              </div>
              <h2 className="">{stock.pair}</h2>
            </div>
            <p>{formatNumber(stock.buy)}</p>
            <p>{formatNumber(stock.sell)}</p>
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
}

function Divider() {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 h-[1px] group-hover:bg-blue-600"></div>
      <div className="col-span-3 h-[1px] bg-gray-300 opacity-50"></div>
    </div>
  );
}

const formatNumber = (num: number) => {
  const [integerPart, decimalPart] = num.toString().split(".");
  const integerDigits = integerPart.length;

  let fractionDigits = 6 - integerDigits;
  if (fractionDigits < 0) fractionDigits = 0;

  return num.toLocaleString("en-US", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
};