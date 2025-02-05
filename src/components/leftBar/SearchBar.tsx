import React from "react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="bg-white">
      <div className="p-4">
        <Input
          className="bg-white"
          type="text"
          placeholder="Search.."
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}