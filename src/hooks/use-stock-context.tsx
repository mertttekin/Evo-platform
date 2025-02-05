'use client';

import { StockContext } from "@/contexts/StockContext";
import { use } from "react";

export const useStock = () => {
    const stockContext = use(StockContext);

    if (!stockContext) throw new Error('Wrap app with Pair Provider');

    return stockContext;
}