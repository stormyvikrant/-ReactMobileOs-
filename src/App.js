import logo from './logo.svg';
import './App.css';


function App() {
  let datas = [
    {
      heading: "Mobile Operating Systems",
      types: ["android", "iphone", "blackberry", "window phones"],
    },
    {
      heading: "Mobile Manufacturers",
      types: ["samsung", "HTC", "samsung", "micromax"],
    },
  
  ];
  return (
    <div >
      {datas.map((e)=>{
        return < Mobiledatashaow data={e}/>
      })}
    </div>
  )
  function Mobiledatashaow(show){
return (
  <div>
    <h1>{show.data.heading}</h1>
    <ul>
      {show.data.types.map((e)=>{
        return <li>{e}</li>
      })}
    </ul>
  </div>
)
  }
  
}


export default App;
// import"./App.css"
// function App() {
//   const food ="Burger"
//   const price="234"
//   const skills=["mern","java","node","react","design"]
//  return (
//  <div className="App">
//   <h1> your food is {food}and price is {price}</h1>
//  <div>{price >180 ? "not buy":"buy it"} pizaa or burger</div>
//  <div>
   
//      {skills.map((e)=> {

// return <Skill skill={e}/>
//      })}
//      </div>
//  </div>
//  )
//  }
//  //component
//   function Skill(probs){
//     return <p className="redtext">Skill:{probs.skill}</p>
//   }


// export default App;