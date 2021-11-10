import GlobalStyle from "./base-styles";
import { useStore } from "./contexts/Store";
import styled from "styled-components";

import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleList from "./components/Container/ArticleList";
import Featured from "./components/Container/Featured";
import Categories from "./components/Container/Categories";

function App() {
  const store = useStore();

  // console.log("TODO: use the store to create the base UI", store);

  return (
    <>
      <GlobalStyle />
      <main className="App">
        <Header />
        
        <Container>
          <Title>Blog</Title>
        </Container>
        
        <FeaturedArea>
          <Container>
            <Featured />
          </Container>
        </FeaturedArea>
        
        <MainContentArea>
          <Container>
            <Categories />
            <ArticleList />
          </Container>
        </MainContentArea>

        <Footer />
      </main>
    </>
  );
}

const MainContentArea = styled.div`
  width: 100%;
  background-color: #ffefe2;
`
const FeaturedArea = styled.div`
  width: 100%;
  display: flex;
  background: linear-gradient(180deg, rgba(255,255,255,1) 75%, rgba(255,245,238,1) 98%, rgba(255,239,226,1) 100%);
`
const Title = styled.h1`
  
`
export default App;
