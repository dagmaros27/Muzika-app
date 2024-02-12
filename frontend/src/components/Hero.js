import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background-image: linear-gradient(to bottom, transparent 60%, #1c1c1c 100%),
    url("https://i.ibb.co/r21zj2s/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Fade = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(32, 32, 32, 0.6),
    #111
  );
`;
const Title = styled.h1`
  font-size: 4rem;
  color: #fde4c3;
`;
const TextWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 2rem;
  z-index: 1;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  width: 200px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #1c1c1c;
  transition: all 0.5s linear;
  &:hover {
    transform: translateY(-10px);
    background-color: #fde4c3;
    color: #1c1c1c;
  }
`;
const Hero = () => {
  return (
    <Container>
      <Overlay />
      <TextWrapper>
        <Title>Experience the Rhythm of Your Life</Title>

        <Link to="/musics" style={{ width: "200px", marginTop: "1rem" }}>
          <Button>See Playlist</Button>
        </Link>
      </TextWrapper>
      <Fade />
    </Container>
  );
};

export default Hero;
