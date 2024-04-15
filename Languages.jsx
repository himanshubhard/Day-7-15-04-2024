import React from 'react'

const Languages = () => {
    let lang=[
      {id:1,name:"java"},
      {id:2,name:"js"},
      {id:3,name:"kotlin"},
      {id:4,name:"C"},
      
    ];
    var check=true;
  return (
    <div>
         <h1 className={check?"bg-warning":"bg-success text-white"}>
          {(check===true)?"Best Language:":"Top 5 language"}</h1>
         <ul>
            {lang.map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))}
         </ul>
        </div>
  ) 
}

export default Languages