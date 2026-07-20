// useCurrencyRate.js
import { useEffect, useState } from "react";
import axios from "axios";

const useCurrencyRate = () => {
  const [usdRate, setUsdRate] = useState(null);

  useEffect(() => {
    axios
      // .get("https://nexgenwebdesigns.com")
      .get(
        "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_yPciI5OQIFGchgFuhHkthvq7TpS42ERPKPKP1CxO",
      )
      .then((res) => {
        const rate = res.data.data.INR;
        setUsdRate(rate);
      })
      .catch((err) => console.error("Currency API Error", err));
  }, []);

  return usdRate;
};

export default useCurrencyRate;
