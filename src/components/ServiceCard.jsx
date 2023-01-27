import { Image } from "react-bootstrap"

const ServiceCard = ({ icon, descrip}) => {
  return (
    <div className="iconCard">
        <Image src={icon} />
        <p className="iconText">{descrip}</p>
    </div>
  )
}

export default ServiceCard