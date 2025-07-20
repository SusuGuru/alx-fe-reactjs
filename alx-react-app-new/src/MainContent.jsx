function MainContent() {
  return (
    <main>
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}
const headerStyle = {
  backgroundColor: "#282c34",
  color: "white",
  padding: "20px",
  textAlign: "center"
};

function Header() {
  return <header style={headerStyle}>My React App</header>;
}

export default MainContent;
