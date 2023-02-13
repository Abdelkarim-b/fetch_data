import { useState } from 'react';
import Axios from "axios";
import './App.css';

function App() {
  //const[catFact, setCatFact] = useState("");
  
  
  // fetch("https://catfact.ninja/fact")
  // .then(res => res.json())
  // .then(data =>{
  //   setCatFact(data.fact)
  // })
  
  // const fetchCatFact = ()=> {
  //   Axios.get("https://catfact.ninja/fact").then((response) => setCatFact(response.data.fact))
  // }
  
  // useEffect(() => {
  //   fetchCatFact()
  // },[])
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null)
  const fetchData = () =>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data)
    })
  }

  // const [excuse, setExcuse] = useState("");
  // const fetchExcuse = (excuse) =>{
  //   Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res) => {
  //   console.log(res.data)  
  //   //setExcuse(res.data)
  //   })
  // }
  return (
    <div className="App">
        <input placeholder='ex: mohamed ..' onChange={(event) =>{setName(event.target.value)} }></input><br  />
        <button onClick={fetchData}>predict Age</button>
        <h1>name : {predictedAge?.name}</h1>
        <h1>Predicted age : {predictedAge?.age}</h1>
        <h1>count : {predictedAge?.count}</h1>
        {/* <button onClick={()=> fetchExcuse("party")}>Party</button> */}
    </div>
  );
}

export default App;
