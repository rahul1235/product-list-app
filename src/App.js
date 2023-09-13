import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import { API_URL, APP_TITLE } from "./config";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold">{APP_TITLE}</h1>
      </div>
      <br />
      <Search onQuery={setQuery}></Search>
      <ProductList query={query} apiUrl={API_URL} />
      <Footer></Footer>
    </div>
  );
}

export default App;
