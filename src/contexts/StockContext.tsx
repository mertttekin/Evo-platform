"use client";

import { createContext, useState } from "react";

export interface CombinedStock {
  pair: string;
  buy: number;
  sell: number;
  flag_url_from: string;
  flag_url_to: string;
}

type StockContextType = {
  stock: CombinedStock;
  changeStock: (stock: CombinedStock) => void;
};
type StockProviderProps = {
  children: React.ReactNode;
};

export const StockContext = createContext<StockContextType | null>(null);

export default function StockProvider({ children }: StockProviderProps) {
  const [stock, setStock] = useState<CombinedStock>({
    pair: "EURUSD",
    buy: 1,
    sell: 1,
    flag_url_from: "/assets/stockFlags/eur.svg.png",
    flag_url_to: "/assets/stockFlags/usd.svg.png",
  });

  const changeStock = (stock: CombinedStock) => {
    setStock(stock);
  };

  return <StockContext value={{ stock, changeStock }}>{children}</StockContext>;
}
