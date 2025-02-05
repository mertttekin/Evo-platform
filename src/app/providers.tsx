import StockProvider from "@/contexts/StockContext";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <StockProvider>{children}</StockProvider>;
}
