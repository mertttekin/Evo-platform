"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { GoDotFill } from "react-icons/go";
import { MdArrowDropDown } from "react-icons/md";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Mode = {
  id: string;
  label: string;
  color: string;
  hoverColor: string;
  background?: string;
};

const modes: Mode[] = [
  {
    id: "real",
    label: "Real",
    color: "text-green data-[selected='true']:text-green",
    hoverColor: "hover:text-green",
    background: "bg-green",
  },
  {
    id: "demo",
    label: "Demo",
    color: "text-orange-500 data-[selected='true']:text-orange-500",
    hoverColor: "hover:text-orange-500",
  },
];

export default function RealButton() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>(modes[0].id);

  const activeMode = modes.find((mode) => mode.id === value);
  const otherModes = modes.filter((mode) => mode.id !== value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-[100] capitalize rounded-2xl flex items-center justify-center border-none h-18", {
            [activeMode?.color ?? ""]: true,
            [activeMode?.hoverColor ?? ""]: true,
          })}
        >
          <GoDotFill  />
          {activeMode?.label}
          <MdArrowDropDown className="w-20" color="gray" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="popover-content-width-same-as-its-trigger p-0  rounded-2xl">
        <Command className={cn("rounded-2xl", {
          'bg-orangebg': activeMode?.id==='real',
          "bg-green": activeMode?.id === 'demo'
        })}>
          <CommandList >
            <CommandGroup className="h-16">
              {otherModes.map((mode) => (
                <CommandItem
                  color="text-white"
                  key={mode.id}
                  value={mode.id}
                  className={cn(
                    "capitalize z-10 hover:bg-slate-100 rounded-2xl",
                    mode.color
                  )}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    setOpen(false);
                  }}
                >
                  <GoDotFill />
                  {mode.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <p className="text-[8px] mx-auto py-2">Demo Trading Account</p>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
