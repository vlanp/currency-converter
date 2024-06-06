import Currency from "./main-content/Currency";
import arrowDown from "../../assets/img/arrow-down.png";
import arrowUp from "../../assets/img/arrow-up.png";
import { useState } from "react";
import CurrencyData from "../../enum/CurrencyData";

const MainContent = () => {
  const [currency1Value, setCurrency1Value] = useState(0);
  const [currency1, setCurrency1] = useState(CurrencyData[CurrencyData.EUR]);
  const [currency2Value, setCurrency2Value] = useState(0);
  const [currency2, setCurrency2] = useState(CurrencyData[CurrencyData.USD]);

  const convertedCurrencyValue = parseFloat(
    (
      (Number(
        Object.keys(CurrencyData)[
          Object.values(CurrencyData).indexOf(currency2)
        ]
      ) /
        Number(
          Object.keys(CurrencyData)[
            Object.values(CurrencyData).indexOf(currency1)
          ]
        )) *
      currency1Value
    ).toFixed(2)
  );

  if (
    currency2Value !== convertedCurrencyValue &&
    currency1 in CurrencyData &&
    currency2 in CurrencyData
  ) {
    setCurrency2Value(convertedCurrencyValue);
  }

  return (
    <section className="main-content">
      <Currency
        currency={currency1}
        setCurrency={setCurrency1}
        currencyValue={currency1Value}
        setCurrencyValue={setCurrency1Value}
      />
      <div className="arrow">
        <img
          src={arrowDown}
          onClick={() => {
            setCurrency1(currency2);
            setCurrency2(currency1);
            setCurrency1Value(currency2Value);
            setCurrency2Value(currency1Value);
          }}
          alt="arrow down"
        />
        <img
          src={arrowUp}
          onClick={() => {
            setCurrency1(currency2);
            setCurrency2(currency1);
            setCurrency1Value(currency2Value);
            setCurrency2Value(currency1Value);
          }}
          alt="arrow up"
        />
      </div>
      <Currency
        currency={currency2}
        setCurrency={setCurrency2}
        currencyValue={currency2Value}
        setCurrencyValue={setCurrency2Value}
      />
    </section>
  );
};

export default MainContent;
