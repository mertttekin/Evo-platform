import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        className="py-4"
        src="/assets/Logo.png"
        alt="logo"
        width={220}
        height={49}
      />
    </div>
  );
}
