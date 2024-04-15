import React from "react";
const Counter=()=>{
    let count=0;
    return(
        <div className="container mt-3">
            <button className="btn btn-primary" onClick={decrement}>Decrement</button>
            <span className="mx-2 my-2">{count}</span>
            <button className="btn btn-primary" onClick={increment}>INcrement</button>
           
        </div>
    );
};