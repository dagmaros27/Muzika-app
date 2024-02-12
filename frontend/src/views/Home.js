import styled from "@emotion/styled";
import React from "react";
import dummy from "../data/music";
import MusicCard from "../components/MusicCard";
import Hero from "../components/Hero";

const Container = styled.div`
  background-color: #1c1c1c;
  padding: 2rem 2rem;
`;

const Title = styled.h1`
  border-bottom: 0.5px solid #fde4c3;
  margin-bottom: 1rem;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const MusicContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;
const Home = () => {
  return (
    <Container>
      <Title>Trending Music</Title>
      <Wrapper>
        <MusicContainer>
          {dummy.map((music) => (
            <MusicCard music={music}></MusicCard>
          ))}
        </MusicContainer>
      </Wrapper>
    </Container>
  );
};

export default Home;

// #1c1c1c black
// #302a18 faze black
// #fde4c3 shiro
// #f6f6f6 white
