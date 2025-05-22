import styles from "./Stock.module.css";

export function Stock({ stock }) {
  return (
    <div className={styles.stockBlock}>
      <h1>{stock.s}</h1>
      <div className={styles.valuesBlock}>
        <h2>ASK: US$ {stock.a}</h2>
        <h2>BID: US$ {stock.b}</h2>
      </div>
    </div>
  );
}
