import './App.css';
import Header from "./pages/Header";
import {Hero} from "./pages/Hero";
import styled from "styled-components";


function App() {
  return (
  <>
    <Container>
<Header />
  <Hero />
    </Container>
  </>
  );
}

const Container = styled.section`
  height: 880px;
  background: #28293E;
  width: auto;
  max-width: 100%;
`

export default App;
