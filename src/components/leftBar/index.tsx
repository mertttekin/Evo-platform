"use client";

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import StockList from './StockList';

export default function Index() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <div className="bg-primary flex flex-col gap-4 ">
      <SearchBar onSearch={handleSearch} />
      <StockList searchTerm={searchTerm} />
    </div>
  );
}
