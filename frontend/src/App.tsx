import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Home from './pages/Home'

const App: React.FC<any> = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Home/>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
