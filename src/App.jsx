import { useState } from "react"


function App() {

  const [subject,setSubject] = useState("");
  const [hours,sethours] = useState("");
  const [data,setData] = useState([])
  console.log(data);


  const submitbutton = ()=>{
    if(subject && hours){
      const newUpdatedData = [...data , {"subject":subject,"hours":parseInt(hours)}]
      setData(newUpdatedData);
      setSubject("");
      sethours("");
    }
    else{
      alert("Please fill both field.")
    }
  }

  const increaseHour = (index)=>{
    const currentdataAdd = [...data];
    currentdataAdd[index].hours +=1;
    setData(currentdataAdd);
  }

  const decreaseHour = (index)=>{
    const currentdataMinus = [...data];
    currentdataMinus[index].hours -=1;
    setData(currentdataMinus);
  }


  

  return (
    <>
      <div style={{padding:"20px", position:"relative", top:"20%"}}>
        <h2>Geekster Education Planner</h2>
        <br></br>
        <div>
          <input type="text" name="subject" id="subject" placeholder="Subject" style={{height:"28px",marginRight:"8px", outline:"none"}} onChange={e => setSubject(e.target.value)} value={subject}/>

          <input type="number" name="Hour" id="Hour" placeholder="Hours" style={{width:"60px", height:"28px",outline:"none"}} onChange={e => sethours(e.target.value)} value={hours}/>

          <button style={{padding:"7px",paddingLeft:"10px",paddingRight:"10px", marginLeft:"10px", backgroundColor:"rgb(59 130 246",border:"none", color:"white", cursor:"pointer"}} onClick={submitbutton}>Add</button>
        </div>
        <div className="list">
          {
            data.map((value,index)=>{
                 return(
                  <div key={index} style={{display:"flex", justifyContent:"center",alignItems:"center", gap:"10px", marginTop:"10px"}}>
                    <div>{value.subject}  -  {value.hours} hours</div>
                    <button style={{padding:"8px", backgroundColor:"rgb(34 197 94)",border:"none",color:"white",cursor:"pointer"}} onClick={()=>increaseHour(index)} >+</button>
                    <button style={{padding:"8px",backgroundColor:"red",border:"none",color:"white", cursor:"pointer"}} onClick={()=>decreaseHour(index)}>-</button>
                  </div>
                 )
            })
          }
          

        </div>
      </div>
    </>
  )
}

export default App
