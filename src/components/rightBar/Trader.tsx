"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import { useStock } from "@/hooks/use-stock-context";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Trader() {
  const { stock } = useStock();

  return (
    <Tabs defaultValue="sell" className="w-full lg:w-[360px] bg-white">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger
          className="uppercase bg-red text-white rounded-none "
          value="sell"
        >
          Sell
        </TabsTrigger>
        <TabsTrigger
          className="uppercase bg-green text-white rounded-none "
          value="buy"
        >
          buy
        </TabsTrigger>
      </TabsList>
      <TabsContent value="sell">
        <Card className="border-0">
          <CardHeader className="p-3 sm:p-4">
            <CardTitle>
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
                <h2
                  className={cn("text-[18px] text-[#3E4650]", roboto.className)}
                >
                  {stock.pair}
                </h2>
              </div>
            </CardTitle>
            {/* <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-2 p-3 sm:p-4">
            <div className="space-y-1">
              <Label className="text-[#D1D4D9] text-[14px]" htmlFor="volume">
                Volume in lot
              </Label>

              <Input className="bg-white" id="volume" defaultValue="0.01" />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-[#838F9E] text-[14px]" htmlFor="volume">
                Stop loss:
              </Label>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-[#838F9E] text-[14px]" htmlFor="volume">
                Take profit:
              </Label>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-[#838F9E] text-[14px]" htmlFor="volume">
                Open order when price is:
              </Label>
              <Switch />
            </div>
            <Separator />
            <p className="p-0 text-base font-normal text-[#3E4650]">
              Order details
            </p>
            <div className="flex items-center justify-between">
              <Label className="text-[#838F9E] text-[14px]" htmlFor="volume">
                {stock.pair}
              </Label>
              <p className="text-[14px] pr-2">N/A</p>
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-[#838F9E] text-[14px]" htmlFor="volume">
                Volume in lot:
              </Label>
              <p className="text-[14px] pr-2">1</p>
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-[#838F9E] text-[14px]" htmlFor="volume">
                1 lot:
              </Label>
              <p className="text-[14px] pr-2">100,000.00 EUR ($ 105,353.00)</p>
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-[#838F9E] text-[14px]" htmlFor="volume">
                Required Margin:
              </Label>
              <p className="text-[14px] pr-2">$ 1,053.53</p>
            </div>
          </CardContent>
          <CardFooter className="p-3 sm:p-4">
            <Button
              className="text-white bg-red w-full hover:scale-105 duration-500 rounded-2xl"
              variant="none"
            >
              SELL <span className="text-white">1,053.53</span>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="buy">
        <Card className="border-0">
          <CardHeader className="p-3 sm:p-4">
            <CardTitle>
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
                <h2
                  className={cn("text-[18px] text-[#3E4650]", roboto.className)}
                >
                  {stock.pair}
                </h2>
              </div>
            </CardTitle>
            {/* <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-2 p-3 sm:p-4">
            <div className="space-y-1">
              <Label className="text-[#D1D4D9] text-[14px]" htmlFor="volume">
                Volume in lot
              </Label>

              <Input className="bg-white" id="volume" defaultValue="0.01" />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-[#838F9E] text-[14px]" htmlFor="volume">
                Stop loss:
              </Label>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-[#838F9E] text-[14px]" htmlFor="volume">
                Take profit:
              </Label>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-[#838F9E] text-[14px]" htmlFor="volume">
                Open order when price is:
              </Label>
              <Switch />
            </div>
            <Separator />
            <p className="p-0 text-base font-normal text-[#3E4650]">
              Order details
            </p>
            <div className="flex items-center justify-between">
              <Label className="text-[#838F9E] text-[14px]" htmlFor="volume">
                EURUSD
              </Label>
              <p className="text-[14px] pr-2">N/A</p>
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-[#838F9E] text-[14px]" htmlFor="volume">
                Volume in lot:
              </Label>
              <p className="text-[14px] pr-2">1</p>
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-[#838F9E] text-[14px]" htmlFor="volume">
                1 lot:
              </Label>
              <p className="text-[14px] pr-2">100,000.00 EUR ($ 105,353.00)</p>
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-[#838F9E] text-[14px]" htmlFor="volume">
                Required Margin:
              </Label>
              <p className="text-[14px] pr-2">$ 1,053.53</p>
            </div>
          </CardContent>
          <CardFooter className="p-3 sm:p-4">
            <Button
              className="text-white bg-green w-full hover:scale-105 duration-500 rounded-2xl"
              variant="none"
            >
              BUY <span className="text-white">1,053.53</span>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
