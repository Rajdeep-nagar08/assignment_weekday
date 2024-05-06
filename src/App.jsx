import "./App.css";
import Home from "./pages/HomePage";
import GridLines from "react-gridlines";


function App() {
  return (
    <GridLines
      className="bg-slate-100"
      lineColor="#fcfcfc"
      cellWidth={50}
      strokeWidth={2}
      cellWidth2={50}
    >
      <Home />
      </GridLines>
  );
}

export default App;
