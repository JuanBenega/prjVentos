import { Image } from "react-bootstrap"

const ClientCard = ({ name, pic, title, text}) => {
  return (
    <div className="clientCard">
        <h4 className="clientName">{name}</h4>
        <Image className="clientPic" src={pic}/>
        <h3 className="clientTitle">{title}</h3>
        <p className="clientText">{text}</p>
    </div>
  )
}

export default ClientCard