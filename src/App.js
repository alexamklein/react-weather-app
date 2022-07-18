import SearchForm from "./SearchForm";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchForm defaultCity="Toronto" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
