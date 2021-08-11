
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState()
  var [f, setF] = useState(true)
  var srcImg = "https:picsum.photos\/200\/300"
  
  //https://reqres.in/api/users?page=2

  useEffect(()=>{
    async function getTodos(){
        try {
            const response = await fetch("https://reqres.in/api/users?page=2");
            const jsonData = await response.json();
            setData(jsonData);
            console.log(data);
            setF(false)
        } catch (error) {
            console.log(error);
        }
    }
    if(f === true){
      getTodos()
    }
},[data])

  return (
    <div className="App">
      <h1>test</h1>
      <div className="flexParent">

      {data && data.data.map((d)=>{
        srcImg = `https:picsum.photos/20${Math.round(Math.random()*10)}/30${Math.round(Math.random()*10)}`
        return(
          <div className="flex">
            
            <h1><img className="avatar" src={d.avatar} alt="avatar" />{d.first_name} {d.last_name}</h1>
            <i>{d.email}</i>
            <p>Look at my art: </p>
            <img src={srcImg} alt="art" />
          </div>
        )
      })}
        
      </div>

    </div>
  );
}

export default App;
