import "./App.css";
import Inputs from "./components/Inputs";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import Forecast from "./components/Forecast";
import { useContext } from "react";
import { GlobalContext } from "./context";
import HForecast from "./components/HForecast";

function App() {
  const { hf } = useContext(GlobalContext);

  return (
    <div className="max-w-screen mx-auto bg-gradient-to-br from-cyan-700 to-blue-700 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-md sm:mt-2 md:mt-3 lg:mt-4 py-4 px-5 sm:px-12 md:px-20 lg:px-32 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      {hf?.location ? (
        <>
          <TimeAndLocation />
          <TempAndDetails />
          <HForecast title={"hourly forecast"} />
          <Forecast title={"daily forecast"} num={3} />
        </>
      ) : null}
    </div>
  );
}

export default App;
