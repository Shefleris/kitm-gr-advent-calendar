const Card = ({day,tip, flipStates, index, handleFlip}) =>{
    return(
            <div  className={`card ${flipStates[index] ? "flip" : "" }`}>
                <div className="front" onClick={()=> handleFlip(index)}>                       
                    <div className="day-number">
                        <p>{day}</p>
                    </div>
                    <div className="card-icon">
                        <span>icon</span>
                    </div>
                </div>
                <div className="back" onClick={()=> handleFlip(index)}>
                    <p>{tip}</p>
                </div>
            </div>             
    )
}
export default Card