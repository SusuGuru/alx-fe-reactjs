const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};
const headerStyle = {
  backgroundColor: "#282c34",
  color: "white",
  padding: "20px",
  textAlign: "center"
};

function Header() {
  return <header style={headerStyle}>My React App</header>;
}

export default UserProfile;
