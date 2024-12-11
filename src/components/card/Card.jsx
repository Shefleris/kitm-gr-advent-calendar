const Card = ({day,tip, flipStates, index, handleFlip, icon}) =>{
    return(
            <div  className={`card ${flipStates[index] ? "flip" : "" }`}>
                <div className="front" onClick={()=> handleFlip(index)}>                       
                    <div className="day-number">
                        <p>{day}</p>
                    </div>
                    <div className="card-icon">
                        <div className='icon'>{icon}</div>
                    </div>
                </div>
                <div className="back" onClick={()=> handleFlip(index)}>
                    <p className='text-center'>{tip}</p>
                </div>
            </div>             
    )
}
export default Card