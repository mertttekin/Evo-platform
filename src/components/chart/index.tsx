'use client'

import { useEffect, useRef, memo } from 'react';
import { useStock } from "@/hooks/use-stock-context";
export default function PriceChart() {
  const container = useRef<HTMLDivElement | null>(null);
  const {stock} = useStock();

  useEffect(
    () => {
      if (!container.current) return;

      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "${stock.pair}",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);

      return () =>{
        container.current?.querySelector('iframe')?.remove();
      }
    },
    [stock]
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "765px", minHeight:"765px", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}


