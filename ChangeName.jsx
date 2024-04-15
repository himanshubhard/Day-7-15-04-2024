

const ChangeName=(props)=>{
    let {name,onUpdate}=props;
    return(
        <div className='container mt-4'>
            <div className='fs-1'>{name}</div>
            <button className='btn btn-warning'onClick={onUpdate}>Change Name</button>
        </div>      
    )
}

export default ChangeName
