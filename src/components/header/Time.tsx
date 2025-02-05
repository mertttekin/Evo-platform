"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { MdArrowDropDown } from "react-icons/md";
import { cn } from "@/lib/utils";
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

import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

const getCurrentTime = () => {

    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour12: false });
  };

export default function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("14:12:09");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-[100] bg-white capitalize rounded-2xl flex items-center justify-center border-none h-18 ",roboto.className)}
        >
          { getCurrentTime() || value}
          <MdArrowDropDown className="w-20" color="gray" />
        </Button>
      </PopoverTrigger>
      {/* <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent> */}
    </Popover>
  );
}
