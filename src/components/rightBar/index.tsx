import Trader from "./Trader";
import AllNews from "./AllNews";

export default function index() {
  return (
    <div className="flex flex-col gap-2 sm:gap-4 w-full">
      <Trader />
      <AllNews />
    </div>
  );
}
