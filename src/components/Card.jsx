import "./styles/Card.css";

function Card(props) {
    return (
        <div className='card' key={props.id.toString()}>
          <h3>{props.nama}</h3>
          <h5>{props.alamat}</h5>
          <h5>{props.email}</h5>
          <h5>{props.telepon}</h5>
        </div>
    )
}
export default Card;