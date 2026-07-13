import React from "react";
import UserBadgw from "./components/UserBadgw";
import img from "./assets/images.jpg"
import img1 from "./assets/peakpx (1).jpg"
import Counter from "./components/Counter";
import Products from "./components/Products";


function App() {
  return (
      <div className="flex justify-center items-center min-h-screen gap-4">
      <UserBadgw 
      name="Uchiha Obito"
      role="Jonin"
      image={img} 
       />
      <UserBadgw
      name="Hatake Kakashi"
      role="Jonin"
      image={img1} 
       />

       <Counter />
       <Products />

    </div>

  );
}

export default App