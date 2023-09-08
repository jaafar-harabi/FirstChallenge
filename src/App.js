import Button from "./components/Button";
import Post from "./components/Post";


function App() {
  return (
    <div className="App">

      <div className="pingu">
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
          <Button/>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
          <Button/>
          
        </div>

      </div>
      
    
    
    </div>
  );
}

export default App;
