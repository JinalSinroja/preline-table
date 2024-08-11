import { useEffect } from "react";
import "./App.css";
import data from "./dummyData.json";
import HTable from "./HTable";
import { HSStaticMethods } from "preline";

HSStaticMethods.autoInit();

const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    HSStaticMethods.autoInit();
  }
});

observer.observe(document.body, {
  attributes: true,
  subtree: true,
  childList: true,
  characterData: true,
});

function App() {
  return (
    <div>
      {Object.keys(data).map((key) => {
        return <HTable key={key} tableData={data[key]} title={key} />;
      })}
    </div>
  );
}

export default App;
