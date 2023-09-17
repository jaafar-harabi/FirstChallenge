import Button from "./components/Button";
import Post from "./components/Post";


function App() { 
  const obj = {
    button1:'Hello',
    button2:'Pingu',
    button3:'coder'
  }
  return (
    <div className="App">

      <div className="pingu" style={{height:"70px",paddingTop:"30px"}} >
        <h1> PinguCoder</h1>
      </div>
      <div className=" body-res ">
        <div >
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          
        </div>

        <div className="body-res-1" style={{marginLeft:"250px",marginTop:"20px"}} >
          <Button obj={obj.button1} />
          <Button obj={obj.button2}/>
          <Button obj={obj.button3}/>
          <Button obj={obj.button1}/>
          <Button obj={obj.button2}/>
          <Button obj={obj.button3}/>
          
        </div>

      </div>
      
    
    
    </div>
  );
}

export default App;
