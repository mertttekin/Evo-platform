// import React from "react";
// import Image from "next/image";
// export default function Profile() {
//   return (
//     <div className="w-[41px] h-[41px] bg-profileColor rounded-full flex items-center justify-center">
//       <Image
//         className="py-4"
//         src="/assets/profile/user.png"
//         alt="logo"
//         width={19}
//         height={23}
//       />
//     </div>
//   );
// }

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
      <DropdownMenuContent className="w-56 bg-defaultbg">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>KYC</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Password</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Deposit / Withdrawl</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Help</DropdownMenuItem>
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
