export default function Greeting({ name, children }) {
  return (
    <>
      <div>hello {name}</div>
      <div>this is Children</div>
      {children}
    </>
  );
}
