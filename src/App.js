import Button from "./components/Button";


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
    return (
    <>
    <div style={{border:"3px solid #68abfe",listStyle:"none",height:'100px',width:'250px',textAlign:'center',padding:'10px',margin:'10px'}}>
            <li key={task.id} style={{fontSize:'24px'}} > {task.title}  </li> <br/>
            <li key={task.id} style={{fontSize:'16px'}}> {task.description} </li>
    </div>
            
    </> 
    )
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
