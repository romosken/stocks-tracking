import { useState } from "react";
import { Header } from "../components/Header";
import { AddStocksModal } from "./AddStocksModal";
import { StocksTracking } from "./StocksTracking";

export function Home() {
  const [trackedStocks, setTrackedStocks] = useState([]);
  const [addStocksVisible, setAddStocksVisible] = useState(false);
  return (
    <>
      <Header />
      <StocksTracking symbols={trackedStocks} />
      {addStocksVisible && (
        <AddStocksModal
          closeModal={() => setAddStocksVisible(false)}
          setTracked={setTrackedStocks}
          tracked={trackedStocks}
        />
      )}
    </>
  );
}
