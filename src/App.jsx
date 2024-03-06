import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {

  const [money, setMoney] = useState({
    TRY: null,
    USD: null,
    EUR: null,
  });
  const getData = async () => {
    try {
      //   const {data} = await axios.get("https://v6.exchangerate-api.com/v6/69d9d2dad7291ba3924ae39c/latest/TRY");
      //  setMoney({
      //   TRY: data.conversion_rates?.TRY,
      //   USD: data.conversion_rates.TRY / data.conversion_rates?.USD,
      //   EUR: data.conversion_rates.TRY/ data.conversion_rates?.EUR

      //  })
      setMoney({
        TRY: 1,
        USD: 32,
        EUR: 31,
      });
    } catch (error) {
      console.error("API'den veri alınırken bir hata oluştu:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>

      <div>Dolar {money.USD}</div>
      <div>EURO {money.EUR}</div>
    </div>
  );
}

export default App;
