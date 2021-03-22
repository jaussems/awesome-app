import "./Pokemon.scss";

export default function Pokemon(props) {
  return (
    <div className="card Pokemon">
      <div className="card-body">
        <h5 className="card-title mb-4">{props.name}</h5>
        <h6 className="card-subtitle mb-3 text-primary .mb-4">
          {props.awesome ? "An awesome Pokemon" : "Not awesome"}
        </h6>
        <p>
          Weight: {props.weight} kg
          <br />
          Terrifying: {props.terrifying ? "Very" : "nah, lovable"}
          <br />
          {props.abilities.length} abilities
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {props.abilities.map((ability, index) => {
          return (
            <li key={index} className="list-group-item">
              {ability}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
