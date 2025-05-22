import { useState } from "react";
import { useStocksSymbols } from "../hooks/useStocks";
import styles from "./AddStocksModal.module.css";

export function AddStocksModal({ closeModal, tracked, setTracked }) {
  const symbols = useStocksSymbols();
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const searchResults =
    searchValue.length > 1
      ? symbols.filter((symbol) => symbol.includes(searchValue.toUpperCase()))
      : [];

  return (
    <div className={styles.outterBlock}>
      <div className={styles.innerBlock}></div>

      <div className={styles.selectedStocks}>
        {tracked.map((stock) => (
          <div className={styles.stockSelected}>
            <h1>{stock}</h1>
          </div>
        ))}
      </div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search stock name..."
          value={searchValue}
          onChange={handleInputChange}
        />
        {searchResults &&
          searchResults.map((result) => (
            <div className={styles.searchResult}>
              <h1>{result}</h1>
            </div>
          ))}
      </div>
    </div>
  );
}
