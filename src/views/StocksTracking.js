import { Stock } from "../components/Stock";
import { useStocksPrices } from "../hooks/useStocks";

export function StocksTracking({ symbols }) {
  const stocks = useStocksPrices("AAPL,MSFT");

  return (
    <>
      {stocks.map((stock) => (
        <Stock key={stock.s} stock={stock} />
      ))}
    </>
  );
}
