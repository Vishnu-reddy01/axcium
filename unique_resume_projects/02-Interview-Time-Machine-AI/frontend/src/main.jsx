import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import "./style.css";

const history=[
 {round:"Round 1",topic:"Java Collections",score:72,weakness:"HashMap internals"},
 {round:"Round 2",topic:"Spring Boot",score:81,weakness:"Exception handling"},
 {round:"Round 3",topic:"Multithreading",score:58,weakness:"Synchronization"}
];

function App(){
 const [q,setQ]=useState("Based on your previous weakness in synchronization, explain the difference between synchronized and ReentrantLock.");
 return <div className="app">
  <h1>Interview Time Machine</h1>
  <p className="tag">Your past interviews shape your future questions.</p>
  <div className="question"><small>AI FOLLOW-UP QUESTION</small><h2>{q}</h2><textarea placeholder="Type your answer..."/><button onClick={()=>alert("Send answer to Spring Boot + LLM evaluation API")}>Submit Answer</button></div>
  <h2>Interview Memory</h2>
  <div className="history">{history.map(x=><div className="item"><b>{x.round}</b><span>{x.topic}</span><span>Score: {x.score}%</span><em>Weakness: {x.weakness}</em></div>)}</div>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);