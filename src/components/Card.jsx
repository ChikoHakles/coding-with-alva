import "./styles/Card.css";

function Card(props) {
    return (
      <div className="card" key={props.id.toString()}>
        <div class="card-body">
          <h3 class="card-title">{props.nama}</h3>
          <p className="card-text">{props.alamat}</p>
          <p className="card-text">{props.email}</p>
          <p className="card-text">{props.telepon}</p>
          <a href="#" class="card-link">Profil</a>
        </div>
      </div>
    )
}
export default Card;