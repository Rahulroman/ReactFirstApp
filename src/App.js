import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./Components/ProductList.tsx";

function App() {
  return (
    <>
      <ProductList />

      <div>
        <Router>
          <Routes>
            <Route path="/"></Route>
            <Route path="cart"></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
