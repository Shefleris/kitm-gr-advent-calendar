import santa from '../assets/img/12christmas-santa-claus.svg'
import home from '../assets/img/11christmas-hut-building.svg'
import star from '../assets/img/10christmas-star-bookmark.svg'
import candle from '../assets/img/9christmas-candle-winter.svg'
import angel from '../assets/img/8christmas-angel-wing.svg'
import firePlace from '../assets/img/7christmas-fireplace-warm.svg'
import reindeer from '../assets/img/2reindeer.svg'
import tree from '../assets/img/1tree.svg'
import santasimple from '../assets/img/3santa.svg'
import sled from '../assets/img/4christmas-sled-sleigh.svg'
import shock from '../assets/img/6christmas-shock-surprise.svg'
import globe from '../assets/img/5christmas-snow-globe.svg'

const getIcon = (day) => {
    const iconMap = {
        1:<img className='icon' src={globe}></img>,
        3:<img className='icon' src={firePlace}></img> ,
        5:<img className='icon' src={star}></img> ,
        8:<img className='icon' src={tree}></img> ,
        10:<img className='icon' src={sled}></img> ,
        12:<img className='icon' src={shock}></img> ,
        13:<img className='icon' src={home}></img>,
        15:<img className='icon' src={angel}></img> ,
        17:<img className='icon' src={santasimple}></img> ,
        20:<img className='icon' src={candle}></img> ,
        22:<img className='icon' src={reindeer}></img> ,
        24:<img className='icon' src={santa}></img> 
    };
    return iconMap[day] || null;
}
export default getIcon