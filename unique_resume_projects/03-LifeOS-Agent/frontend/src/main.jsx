import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import "./style.css";

function App(){
 const [task,setTask]=useState("");
 const [plan,setPlan]=useState(null);
 const run=()=>setPlan([
  "Read today's calendar and identify deadlines",
  "Prioritize important emails",
  "Search connected files for relevant material",
  "Create a focused task list",
  "Ask for confirmation before external actions"
 ]);
 return <div className="app"><h1>LifeOS Agent</h1><p>Your personal execution layer.</p>
 <div className="box"><input value={task} onChange={e=>setTask(e.target.value)} placeholder="e.g. Prepare me for tomorrow's interview"/><button onClick={run}>Plan My Day</button></div>
 {plan&&<div className="plan"><h2>Agent Plan</h2>{plan.map((x,i)=><div className="step"><b>{i+1}</b>{x}</div>)}</div>}
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);