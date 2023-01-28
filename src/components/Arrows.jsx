import { Image } from 'react-bootstrap'
import arrow from '../img/landArrow.png'

const Arrows = () => {
    return (
        <div className="landArrow">
            <Image src={arrow} />
            <Image src={arrow} />
        </div>
    )
}

export default Arrows