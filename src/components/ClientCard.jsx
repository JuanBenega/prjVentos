import { Image } from "react-bootstrap"

const ClientCard = ({ name, pic, title, text}) => {
  return (
    <div className="clientCard">
        <h4 className="clientName">{name}</h4>
        <Image className="clientPic" src={pic}/>
        <h5 className="clientTitle">{title}</h5>
        <p className="clientText">{text}</p>
    </div>
  )
}

export default ClientCard