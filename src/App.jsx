import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";
import AllTheBooks from "./components/AllTheBooks.jsx";
import Footer from "./components/Myfooter.jsx";
import NavBar from "./components/Mynavbar.jsx";
import Myalert from "./components/Myalert.jsx";
function App() {
  return (
    <>
      <Myalert />
      <NavBar />
      <Container>
        <AllTheBooks />
      </Container>

      <Footer />
    </>
  );
}

export default App;
