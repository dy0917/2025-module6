export default function UserInfo(props) {
  return (
    <div className="UserInfo">
      {/* the user info is one aspect of the comment */}
      <img className="Avatar" src={props.avatarUrl} alt={props.name} />
      <div className="UserInfo-name">{props.name}</div>
    </div>
  );
}
