import styled from "@emotion/styled";
import "./App.css";
import Header from "./components/Header";
import Home from "./views/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Musics from "./views/Musics";
import Player from "./views/Player";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const Container = styled.div`
  background-color: #f3f3f3;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Home />
              </>
            }
          />
          <Route
            path="/musics"
            element={
              <>
                <Header />
                <Musics />
              </>
            }
          />
          <Route
            path="/play/:musicId"
            element={
              <>
                <Header />
                <Player />
              </>
            }
          />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
