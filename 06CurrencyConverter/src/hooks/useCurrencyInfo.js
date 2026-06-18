import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  // data -> store currency rates

  useEffect(() => {
    // API Call
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
    // Convert API Response: String -> JSON
    .then((res) => 
        res.json()
    )

    // Store Currency Data
    .then((res) => {
        setData(res[currency]);
    });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
 