
import React from 'react';
import { cn } from "@/lib/utils";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

type TradingStatsProps = {
  balance: number;
  bounce: number;
  freeMargin: number;
  usedMargin: number;
  equity: number;
  pnl: number;
  marginLevel: number;
};

export default function TradingStats({
  balance,
  bounce,
  freeMargin,
  usedMargin,
  equity,
  pnl,
  marginLevel,
}: TradingStatsProps) {
  return (
    <div className="mx-auto">
      <div className="flex sm:divide-x flex-wrap">
        <StatItem label="Balance" color='black' value={balance} strong={false} />
        <StatItem label="Bounce" color='black' value={bounce} strong={false} />
        <StatItem label="Free Margin" color='black' value={freeMargin} strong={false} />
        <StatItem label="Used Margin" color='black' value={usedMargin} strong={false} />
        <StatItem label="Equity" color='green' value={equity} strong={false} />
        <StatItem label="P&L" color='green' value={pnl} strong={true} />
        <StatItem label="Margin Level" color='red' value={`${marginLevel}%`} strong={true} />
      </div>
    </div>
  );
}

type StatItemProps = {
  label: string;
  value: number | string;
  color: string;
  strong : boolean
};

function StatItem({ label, value,color,strong }: StatItemProps) {
  const formattedValue = typeof value === 'number' ? `$ ${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : value;
  return (
    <div className="flex flex-col items-start text-gray-700 px-3 -space-y-0.5">
      <span  className={cn("font-normal text-[10px] sm:text-sm text-tradingNormal",roboto.className,{ "font-bold text-tradingPriceNormal": strong })}>{label}</span>
      <span className={cn("font-normal text-[10px] sm:text-base text-tradingPriceNormal", roboto.className,{"text-green":color === 'green'},{"text-red-500":color === 'red'})}>{formattedValue}</span>
    </div>
  );
}
