import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Profile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="w-[41px] h-[41px] bg-profileColor rounded-full flex items-center justify-center hover:bg-gray-600 p-0"
          variant="outline"
        >
          <Image
            className="py-4"
            src="/assets/profile/user.png"
            alt="logo"
            width={19}
            height={23}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-defaultbg">
        <DropdownMenuLabel>
          <div
            className={cn("border-l-2 border-blue-700 pl-2", roboto.className)}
          >
            <p>Name of Client</p>
            <div className="flex items-center justify-start space-x-2">
              <div className="flex items-center justify-center space-x-1">
                <Image
                  width={14}
                  height={12}
                  alt="arabia"
                  src="/assets/profile/saudi-arabia.png"
                />
                <p className={cn("text-black text-[10px] font-normal")}>
                  Saudi Arabia
                </p>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <Image
                  width={14}
                  height={12}
                  alt="arabia"
                  src="/assets/profile/silver.png"
                />
                <p className={cn("text-black text-[10px] font-normal")}>
                  Silver
                </p>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span className="flex items-center justify-center space-x-2">
              <Image
                width={28}
                height={28}
                alt="arabia"
                src="/assets/profile/Profile Button.png"
              />
              <span className={cn("text-black text-[14px] font-normal")}>
                Profile
              </span>
            </span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span className="flex items-center justify-center space-x-2">
              <Image
                width={28}
                height={28}
                alt="arabia"
                src="/assets/profile/verify 1.png"
              />
              <span className={cn("text-black text-[14px] font-normal")}>
                KYC
              </span>
            </span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span className="flex items-center justify-center space-x-2">
              <Image
                width={25}
                height={25}
                alt="arabia"
                src="/assets/profile/padlock 1.png"
              />
              <span className={cn("text-black text-[14px] font-normal")}>
                Password
              </span>
            </span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span className="flex items-center justify-center space-x-2">
              <Image
                width={25}
                height={25}
                alt="arabia"
                src="/assets/profile/upload 1.png"
              />
              <span className={cn("text-black text-[14px] font-normal")}>
                Deposit / Withdrawl
              </span>
            </span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            {" "}
            <span className="flex items-center justify-center space-x-2">
              <Image
                width={25}
                height={25}
                alt="arabia"
                src="/assets/profile/question 1.png"
              />
              <span className={cn("text-black text-[14px] font-normal")}>
                Help
              </span>
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        {/* <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
