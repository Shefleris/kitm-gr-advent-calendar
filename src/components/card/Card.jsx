const Card = ({day,tip, flipStates, index, handleFlip, icon, themeState}) =>{
    return(
            <div  className={`card ${flipStates[index] ? "flip" : "" } ${themeState === "dark-mode" ? "dark-mode" : "" }`}>
                <div className="front" onClick={()=> handleFlip(index)}>                       
                    <div className="day-number">
                        <p>{day}</p>
                    </div>
                    <div className="card-icon">
                        {icon}
                    </div>
                </div>
                <div className="back" onClick={()=> handleFlip(index)}>
                    <p className='text-center'>{tip}</p>
                </div>
            </div>             
    )
}
export default Card