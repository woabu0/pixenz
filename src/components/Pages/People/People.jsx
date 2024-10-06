function People(props) {
  return (
    <div>
      <div>
        <img src={props.image} />
        <div>
          <h1>{props.name}</h1>
          <h4>{props.role}</h4>
        </div>
      </div>
      <img src={props.icon} />
    </div>
  );
}
export default People;
