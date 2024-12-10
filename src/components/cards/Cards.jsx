import { useGlobalContext } from "../../context/Context";
import Card from "../card/Card";
const Cards = () =>{
    const {tips, flipStates, handleFlip} = useGlobalContext();  
        return(
            <section className="row cards g-3">
                {tips.map((card, index)=>{
                    const {day,tip} = card
                    return(
                        <div key={day} className="col-4 col-md-2">
                            <Card day={day} tip={tip} flipStates={flipStates} index={index} handleFlip={handleFlip}></Card>
                        </div>
                    )
                })}
            </section>
        )   
}
export default Cards