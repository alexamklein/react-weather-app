import Form from "./Form";
import Overview from "./Overview";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Form />
        <Overview />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}

export default App;
