import React, {useEffect, useState} from 'react'


function App() {
  const [joke,setJoke]=useState("Loading")
  const[fname, setfname]=useState("abishek")
  const[sname, setsname]=useState("sahu")
  const newJoke=(fname, sname)=>{
    fetch(`http://api.icndb.com/jokes/random?firstName=${fname}&lastName=${sname}`)
    .then(res=>
      
      res.json()
      
    )
    .then(res2=>{
      // console.log(res2)
      setJoke(res2.value.joke)
    })
  }
  useEffect(()=> {
    newJoke(fname, sname)
    
  },[])
  return (
    <div>
      <h1>Samsung lover </h1>
      <h3>{joke}</h3>
      <input type="text" value={fname} onChange={(e)=>setfname(e.target.value)} ></input>
      <input type="text"  value={sname} onChange={(e)=>setsname(e.target.value)}></input>
      <button onClick={()=>newJoke(fname, sname)}>Change joke </button>
    </div>
  )
}

export default App
