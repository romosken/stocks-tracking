import { useEffect, useState } from "react";
import { getAllStocksSymbols, getStocks } from "../service/stocks.service";

export function useStocksSymbols() {
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    getAllStocksSymbols().then(({ data }) => {
      setSymbols(data.lastQuotes.map((stock) => stock.s));
    });
  }, []);
  return symbols;
}

export function useStocksPrices(symbols) {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      getStocks(symbols).then(({ data }) => {
        console.log("getting quotes");

        setStocks(data.lastQuotes);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [symbols]);

  return stocks;
}
