import { useGlobalContext } from "../../context/Context";
import getIcon from "../../helpers/getIcon";
import Card from "../card/Card";
const Cards = () =>{
    const {tips, flipStates, themeState, handleFlip} = useGlobalContext();  
        return(
            <section className="row cards g-3">
                {tips.map((card, index)=>{
                    const {day, tip} = card
                    return(
                        <div key={day} className="col-4 col-md-2">
                            <Card day={day} tip={tip} flipStates={flipStates} themeState={themeState} index={index} handleFlip={handleFlip} icon={getIcon(day)}></Card>
                        </div>
                    )
                })}
            </section>
        )   
}
export default Cards
