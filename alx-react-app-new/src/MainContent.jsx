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
function MainContent() {
  return (
    <main style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
      <p>This is the main content area.</p>
    </main>
  );
}
export default MainContent;
