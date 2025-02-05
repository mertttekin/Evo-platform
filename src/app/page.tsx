import Header from "@/components/header";
import LeftBar from "@/components/leftBar";
import RightBar from "@/components/rightBar";
import { CiMenuFries } from "react-icons/ci";
import PriceChart from "@/components/PriceChart";
import TradeTable from "@/components/TradeTable";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <CiMenuFries
        className="fixed z-50 top-2 right-2 p-1 rounded-lg bg-white hover:scale-110 duration-300 cursor-pointer xl:hidden"
        size={24}
      />
      <Header />
      <div className="flex flex-col xl:flex-row gap-2 sm:gap-3 p-1 sm:p-3">
        <aside className="w-full xl:w-[360px] xl:min-w-[360px] max-h-[calc(100vh-80px)] overflow-y-auto">
          <LeftBar />
        </aside>
        <section className="flex-1 flex flex-col gap-2 sm:gap-3">
          <div className="flex flex-col lg:flex-row gap-2 sm:gap-3">
            <div className="w-full lg:flex-1 bg-white rounded-lg overflow-hidden h-[50vh] md:h-[60vh] xl:h-full">
              <PriceChart />
            </div>
            <div className="w-full lg:w-[360px] lg:min-w-[360px] bg-primary rounded-lg max-h-[calc(100vh-100px)] overflow-y-auto">
              <RightBar />
            </div>
          </div>
          <div className="w-full bg-white rounded-lg p-1 sm:p-2 overflow-x-auto">
            <TradeTable />
          </div>
        </section>
      </div>
    </main>
  );
}
