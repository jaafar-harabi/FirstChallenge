import Button from "./components/Button";
import Post from "./components/Post"

function App() { 
  const obj = {
    button1:'Hello',
    button2:'Pingu',
    button3:'coder'
  }

  const myTasks=[
    {id:'1',title:'First Task',description:'HTML'},
    {id:'2',title:'Second Task ',description:'CSS'},
    {id:'3', title:'Third Task',description:'JAVASCRIPT'},
    {id:'4', title:'Fourth Task',description:'React'}
  ]

  const task = myTasks.map((task)=>{
      return <Post key={task.id} title={task.title} description={task.description} />
  })
  return (
    <div className="App">

      <div className="pingu" style={{height:"70px",paddingTop:"30px"}} >
        <h1> PinguCoder</h1>
      </div>
      <div className=" body-res ">
        <div >
          
            {task}
          
            
          
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
