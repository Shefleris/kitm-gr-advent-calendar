import { useGlobalContext } from "../../context/Context";
import Card from "../card/Card";
import Icons from "../icons/icons.jsx";
import {useState, useEffect } from "react";

const Cards = () => {
    const { tips, flipStates, themeState, handleFlip } = useGlobalContext();
    const [columnsPerRow, setColumnsPerRow] = useState(0); 
    const updateColumnsPerRow = () => {
        const container = document.querySelector(".cards");
        const card = document.querySelector(".card");
        if (container && card) {
            const containerWidth = container.offsetWidth;
            const cardWidth = card.offsetWidth;
            const calculatedColumns = Math.floor(containerWidth / cardWidth) 
            setColumnsPerRow(calculatedColumns);
        }
    };
    useEffect(() => {
        updateColumnsPerRow();
        window.addEventListener("resize", updateColumnsPerRow);
        return () => window.removeEventListener("resize", updateColumnsPerRow);
    }, []);
    let iconNum = 0;
    return (
        <section className="row cards g-3">
            {tips.map((card, index) => {
                const { day, tip } = card;
                const row = Math.floor(index / columnsPerRow);
                const col = index % columnsPerRow;
                const shouldRenderIcon = (row + col) % 2 === 0;
                const icon = shouldRenderIcon ? Icons[iconNum++] : null;
                return (
                    <div key={day} className="col-6 col-md-4 col-lg-3 col-xl-2">
                        <Card
                            day={day}
                            tip={tip}
                            flipStates={flipStates}
                            themeState={themeState}
                            index={index}
                            handleFlip={handleFlip}
                            icon={icon && <img className="icon" src={icon} alt={`Icon ${index}`} />}
                        />
                    </div>
                );
            })}
        </section>
        )   
}
export default Cards
