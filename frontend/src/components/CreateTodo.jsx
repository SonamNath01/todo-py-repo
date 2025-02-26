 
 
 export function CreateTodo(){
    return(
        <div>
            <input style={{
                padding: "10px",
                borderRadius: "5px",
               
                marginBottom: "10px"
            }} type="text" placeholder="Enter a todo" ></input><br/>
            <input id="desc" style={{
                padding: "10px",
                borderRadius: "5px",
                
                marginBottom: "10px"
            }}
            type="text" placeholder="Enter a description" onChange={function(e){
               const value =  e.target.value;
               setDescription(e.target.value);
            }}></input> <br/>
            <button  style={{
                padding: "10px",
                borderRadius: "5px",
             
                
                marginBottom: "10px"
            }} onClick={() =>{
                fetch("http://localhost:3000/todo",{
                    method:"POST",
                    body:JSON.stringify({
                        title:"hello",
                        description:"world"
                    }),
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                .then( async function(res){
                    const json = await res.json();
                    alert("Todo added");
                   
                })
               

            }}>Add a Todo</button>

            
           

    </div>
    )
}