
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState()
  var [f, setF] = useState(true)
  const looks = ["look", "glance", "glaze", "watch", "quick look", "stare", "peek", "long look", "inpect", "view"]
  const images = ["image", "photo", "photograph", "picture", "pic", "snap"]
  var srcImg = "https:picsum.photos/200/300"
  const le = looks.length
  const phrases = [`${looks[Math.round(Math.random()*le)]} at my ${images[Math.round(Math.random()*images.length)]}`,`Take a ${looks[Math.round(Math.random()*le)]} at my ${images[Math.round(Math.random()*images.length)]} `, `this is a ${images[Math.round(Math.random()*images.length)]} i took`, `${looks[Math.round(Math.random()*le)]} at this ${images[Math.round(Math.random()*images.length)]} i found!`, `cool ${images[Math.round(Math.random()*images.length)]}`, `take a ${looks[Math.round(Math.random()*le)]}`, `${looks[Math.round(Math.random()*le)]} at this!`, "omg", `cool ${images[Math.round(Math.random()*images.length)]} i found on the internet`, "WOW"]
  

  useEffect(()=>{
    async function getTodos(){
        try {
            const response = await fetch("https://randomuser.me/api/?results=30");
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

      {data && data.results.map((d, index)=>{
        srcImg = `https:picsum.photos/20${Math.round(Math.random()*10)}/30${Math.round(Math.random()*10)}`
        return(
          <div key={index} className={d.gender === "male" ? "flex" : "flex F"}>
            <h1><img className="avatar" src={d.picture.thumbnail} alt="avatar" />{d.name.first} <img className="nat" src={`https://www.countryflags.io/${d.nat}/flat/64.png`} alt={d.nat} /> {d.name.last}</h1>
            <i>{d.email}</i>
            <p>{phrases[Math.round(Math.random()*phrases.length)]}</p>
            <img className="img" src={srcImg} alt="art" />
          </div>
        )
      })}
        
      </div>

    </div>
  );
}

export default App;
