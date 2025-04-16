export default function Hero(props) {
  console.log("hero", props);
  return (
    <>
      <div >
        <h3> {props.name} </h3>
        <blockquote>{props.catchPhrase}</blockquote>
        <cite>{props.alterEgo}</cite>
      </div>
    </>
  );
}
