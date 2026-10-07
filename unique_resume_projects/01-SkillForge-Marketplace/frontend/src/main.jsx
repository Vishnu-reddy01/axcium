import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const products=[
 {name:"ATS Resume Template",price:199},
 {name:"Spring Boot Mini Project",price:499},
 {name:"DSA Interview Notes",price:149}
];

function App(){
 return <div className="app">
   <header><h1>SkillForge</h1><span>Student Digital Marketplace</span></header>
   <main>
    <section className="hero"><h2>Buy. Build. Sell.</h2><p>Digital resources created for students and developers.</p></section>
    <section className="grid">{products.map(p=>
      <article className="card" key={p.name}>
       <h3>{p.name}</h3><p>Premium digital resource</p><strong>₹{p.price}</strong>
       <button onClick={()=>alert("Connect this button to Razorpay Checkout")}>Buy Now</button>
      </article>)}</section>
   </main>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);