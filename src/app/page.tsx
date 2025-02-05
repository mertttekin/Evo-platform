import Header from "@/components/header";
import LeftBar from "@/components/leftBar";
import RightBar from "@/components/rightBar";
import { CiMenuFries } from "react-icons/ci";
import PriceChart from "@/components/chart";
import TradeTable from "@/components/TradeTable";


export default function Home() {
  return (
    <div>
      <CiMenuFries className="bg-white absolute top-6 right-6 hover:scale-125 duration-500 xl:hidden" size={30} />
      <Header />
      <div className="flex-1 flex flex-col sm:flex-row items-start justify-between gap-4 bg-primary py-4">
        <div className="w-full sm:w-1/6 min-w-full sm:min-w-[360px]  bg-primary">
          <LeftBar />
        </div>
        <div className="w-full sm:w-5/6 flex flex-col gap-4">
          <div className="flex flex-1 gap-4 flex-col sm:flex-row">
            <div className="flex-1 bg-white">
              <PriceChart />
            </div>
            <div className="min-w-[360px] bg-primary">
              <RightBar />
            </div>
          </div>
          <div className="flex flex-1 bg-white w-full p-1 overflow-x-auto">
            <TradeTable />
          </div>
        </div>
      </div>
    </div>
  );
}
