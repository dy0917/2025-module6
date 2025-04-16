export function City({
  name,
  state = "NSW",
  country = "Australia",
  children,
}) {
  // destructuring the props.children property as well

  return (
    <div className="City">
      <strong>{name}</strong> is in {state}, {country}
      {children}
    </div>
  );
}
