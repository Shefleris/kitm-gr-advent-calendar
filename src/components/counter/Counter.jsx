import { useGlobalContext } from "../../context/Context";

const Counter = () =>{
    const {flipStates} = useGlobalContext();
    const countTotal = flipStates.length
    const filtered = flipStates.filter((state) => state === true);
    const countFlipped = filtered.length
    return (
       <p>Advento dienu atidaryta: {countFlipped}/{countTotal}</p>
    )
}   

export default Counter;