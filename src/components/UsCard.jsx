import { Image } from "react-bootstrap"

const UsCard = ({ pic, name, job}) => {
  return (
    <div className="usCard">
        <Image src={pic} className='usCardPic'/>
        <h4 className="usCardTitle">{name}</h4>
        <p className="usCardText">{job}</p>
    </div>
  )
}

export default UsCard