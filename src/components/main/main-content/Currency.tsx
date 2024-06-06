import { Dispatch, SetStateAction } from "react";
import CurrencyData from "../../../enum/CurrencyData";

const Currency = ({
  currency,
  setCurrency,
  currencyValue,
  setCurrencyValue,
}: {
  currency: string;
  setCurrency: Dispatch<SetStateAction<string>>;
  currencyValue: number;
  setCurrencyValue: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="currency-content">
      <input
        className="currency-value"
        type="number"
        name={currency + "Value"}
        value={currencyValue}
        onChange={(event) => {
          setCurrencyValue(Number(event.target.value));
        }}
      />
      <input
        className="currency"
        list="all-currency"
        type="string"
        name={currency + "Value"}
        onChange={(event) => {
          setCurrency(event.target.value);
        }}
        value={currency}
      />
      <datalist id="all-currency">
        {Object.values(CurrencyData).map((currencyData, index) => {
          if (!isNaN(Number(currencyData))) {
            return;
          }
          return <option key={index} value={currencyData}></option>;
        })}
      </datalist>
    </div>
  );
};

export default Currency;
