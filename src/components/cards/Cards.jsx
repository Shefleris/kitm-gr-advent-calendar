import { useGlobalContext } from "../../context/Context";
import getIcon from "../../helpers/getIcon.jsx";
import Card from "../card/Card";
const Cards = () =>{
    const {tips, flipStates, handleFlip} = useGlobalContext();  
        return(
            <section className="row cards g-3">
                {tips.map((card, index)=>{
                    const {day,tip} = card
                    return(
                        <div key={day} className="col-6 col-md-4 col-lg-3 col-xl-2">
                            <Card day={day} tip={tip} flipStates={flipStates} index={index} handleFlip={handleFlip} icon={getIcon(day)}></Card>
                        </div>
                    )
                })}
            </section>
        )   
}
export default Cards
