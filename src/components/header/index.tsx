"use client";

import RealButton from "./RealButton";
import TradingStats from "./TradingStats";
import Logo from "./Logo";
import LocaleSwitcher from "./LocaleSwitcher";
import Profile from "./Profile";
import Time from "./Time";

export default function Header() {
  return (
    <header className="flex flex-col xl:flex-row justify-between items-center px-4 bg-white">
      <div>
        <Logo />
      </div>
      <div>
        <TradingStats
          balance={40240.72}
          bounce={10000.0}
          freeMargin={40240.72}
          usedMargin={4150.72}
          equity={54201.3}
          pnl={7251.3}
          marginLevel={92.4}
        />
      </div>
      <div className="hidden xl:flex items-center justify-center space-x-2">
        <RealButton />
        <Time />
        <LocaleSwitcher />
        <Profile />
      </div>
    </header>
  );
}
