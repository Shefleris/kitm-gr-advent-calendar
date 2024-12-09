//global context irasyti

const Cards = () =>{
    // state tai bus is local storage data, galima turbut, kad rasytusi tik tips, bet tada manau reik reduceryje apdoroti
    // reduceri flipstate reikia flipState padaryti, 
    const [state, dispatch] = userGlobalContext();  
    const handleFlip = (index) => {
        dispatch({type:"FLIP_CARD", payload: index});
    };
        return(
            <section className="cards">
                {state.tips.map((card, index)=>{
                    const {day,tip} = card
                    return(
                        <div key={day} className={`card ${state.flipStates[index] ? "flip" : "" }`}>
                            <div className="front" onClick={()=> handleFlip(index)}>                       
                                <div className="cardNumber">
                                    <p>{day}</p>
                                </div>
                                <div className="cardIcon">
                                    <span>icon</span>
                                </div>
                            </div>
                            <div className="back" onClick={()=> handleFlip(index)}>
                                <p>{tip}</p>
                            </div>
                        </div>                      
                    )
                })}
            </section>
        )   
}
export default Cards