import React from "react";
import Navbar from "./components/Navbar";
import Slid from "./components/Slider";
import Category from "./components/Category";
import Sendvich from "./components/Sendvich";
import Footer from "./components/Footer";
import Maxiox from "./components/Maxiox";
import Lavash from "./components/Lavash";
import Shaurma from "./components/Shaurma";
import Burger from "./components/Burger";
import Sauces from "./components/Sauces";
import Drinks from "./components/Drinks";
import Desserts from "./components/Desserts";
import Kebab from "./components/Kebab";
import Xaggi from "./components/Xaggi";
import Sneks from "./components/Sneks";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Slid />
      </header>
      <main>
        <Category />
        <Maxiox />
        <Lavash/>
        <Sendvich/>
        <Shaurma/>
        <Kebab/>
        <Xaggi/>
        <Sneks/>
        <Burger/>
        <Sauces/>
        <Drinks/>
        <Desserts/>
      </main>
      <footer>
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
