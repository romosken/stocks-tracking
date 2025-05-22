import { FINAGE_API } from "../config/http";

export function getAllStocksSymbols() {
  return FINAGE_API.get("/snapshot/stock");
}
export function getStocks(symbols) {
  return FINAGE_API.get("/snapshot/stock", {
    params: { symbols: symbols },
  });
}
export function getStockQuote(symbol) {
  return FINAGE_API.get(`/last/stock/${symbol}`);
}
