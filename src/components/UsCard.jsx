import { Image } from "react-bootstrap"

const UsCard = ({ pic, name, job}) => {
  return (
    <div>
        <Image src={pic} />
        <h4 className="usCardTitle">{name}</h4>
        <p className="usCardText">{job}</p>
    </div>
  )
}

export default UsCard