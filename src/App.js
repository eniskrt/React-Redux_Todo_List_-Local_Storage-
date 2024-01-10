import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Todos from "./components/main/todos/Todos";
import Footer from "./components/footer/Footer";
import CompletedTasks from "./components/main/completed/Completed";


function App() {
  return (
    <Container className="main-container p-4">
      <Header/>
      <Main>
        <Todos/>
        <CompletedTasks/>
      </Main>
      <Footer/>
    </Container>
  );
}

export default App;
