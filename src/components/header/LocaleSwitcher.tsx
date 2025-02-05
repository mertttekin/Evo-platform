"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { MdArrowDropDown } from "react-icons/md";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";

type Language = {
  id: string;
  name: string;
  flag: string;
};

const laguages: Language[] = [
  {
    id: "English",
    name: "English",
    flag: "UK",
  },
  {
    id: "española",
    name: "española",
    flag: "SPA",
  },
  {
    id: "Germany",
    name: "Germany",
    flag: "DE",
  },
  {
    id: "Türkçe",
    name: "Türkçe",
    flag: "TR",
  },
  {
    id: "العربية",
    name: "العربية",
    flag: "SA",
  },
];

export default function LocaleSwitcher() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>(laguages[0].id);

  const activeLaguage = laguages.find((laguage) => laguage.id === value);
  const otherlaguages = laguages.filter((laguage) => laguage.id !== value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[86px] justify-between rounded-2xl border-none "
        >
          <Image
            className="py-4"
            src={`/assets/flags/${activeLaguage?.flag}.png`}
            alt="logo"
            width={32}
            height={28}
          />
          <MdArrowDropDown className="w-20" color="gray" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" w-[150px] p-0 " align="end">
        <Command>
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {otherlaguages.map((language) => (
                <CommandItem
                  key={language.id}
                  value={language.id}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Checkbox className="border-white bg-white" />
                  <Image
                    className="py-4"
                    src={`/assets/flags/${language?.flag}.png`}
                    alt="logo"
                    width={32}
                    height={28}
                  />
                  {language.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === language.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
