import { Link } from "react-router-dom";
import "./styles/Card.css";

function Card(props) {
    return (
      <div className="card" key={props.id.toString()}>
        <div className="card-body">
          <h3 className="card-title">{props.nama}</h3>
          <div className="card-content">
            <p className="card-text">{props.alamat}</p>
            <p className="card-text">{props.email}</p>
            <p className="card-text">{props.telepon}</p>
          </div>
          <Link to={`/customers/`+ props.id} className="card-link">Profil</Link>
        </div>
      </div>
    )
}
export default Card;