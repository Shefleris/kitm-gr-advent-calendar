import { useState } from "react"

const Cards = () =>{
    //const {setFlip, flip, cardIcon, tips} = useGlobalContext();
    const [flip, setFlip] = useState(false)
    const [tips, setTips] = useState(["hie","hi","hi","hies","hi","hi","hi","hi","hi"]);
        return(
            <section className="cards">
                {tips.map((card)=>{
                    return(
                        <div className={`card ${flip ? "flip" : "" }`}>
                            <div className="front" onClick={()=>setFlip(!flip)}>                       
                                <div className="cardNumber">
                                    <p>1</p>
                                </div>
                                <div className="cardIcon">
                                    <span>icon</span>
                                </div>
                            </div>
                            <div className="back" onClick={()=> setFlip(!flip)}>
                                <p>{card}</p>
                            </div>
                        </div>                      
                    )
                })}
            </section>
        )
    
}
export default Cards