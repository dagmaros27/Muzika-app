import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import {
  faBackward,
  faBackwardFast,
  faForward,
  faForwardFast,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
}
`;
const Container = styled.div`
  background-color: #1c1c1c;
  padding: 2rem 2rem;
  height: calc(100vh - 60px);
  position: relative;
`;

const ControlWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 100%;
  display: flex;
`;
const Controls = styled.div`
  flex: 0.6;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const MusicInfo = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
`;
const MusicTitle = styled.h2``;

const ArtistName = styled.p``;

const ImageWrapper = styled.div`
  width: 30vw;
  height: 30vh;
  border-radius: 50%;
  margin: 0 auto;
`;
const Image = styled.img`
  object-fit: contain;
  max-width: 100%;
  animation-name: ${rotate};
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const Player = () => {
  const { musicId } = useParams();

  const [play, setPlay] = useState(false);
  const [music, setMusic] = useState(null);

  function handlePlay() {
    setPlay(!play);
  }
  useEffect(() => {
    async function getMusic() {
      if (musicId) {
        await axios
          .get("/musics/" + musicId)
          .then((response) => {
            setMusic(response?.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    getMusic();
  }, [musicId]);
  return (
    <Container>
      <ImageWrapper>
        <Image src="https://clipart-library.com/images/rinBA9biR.png" />
      </ImageWrapper>
      <ControlWrapper>
        <MusicInfo>
          <MusicTitle>{music?.musicTitle}</MusicTitle>
          <ArtistName>{music?.artistName}</ArtistName>
        </MusicInfo>
        <Controls>
          <FontAwesomeIcon
            icon={faBackwardFast}
            color="#fde4c3"
            size="xl"
            style={{ cursor: "pointer" }}
          />
          <FontAwesomeIcon
            icon={faBackward}
            color="#fde4c3"
            size="xl"
            style={{ cursor: "pointer" }}
          />
          <FontAwesomeIcon
            icon={play ? faPlay : faPause}
            color="#fde4c3"
            size="xl"
            style={{ cursor: "pointer" }}
            onClick={handlePlay}
          />
          <FontAwesomeIcon
            icon={faForward}
            color="#fde4c3"
            size="xl"
            style={{ cursor: "pointer" }}
          />
          <FontAwesomeIcon
            icon={faForwardFast}
            color="#fde4c3"
            size="xl"
            style={{ cursor: "pointer" }}
          />
        </Controls>
      </ControlWrapper>
    </Container>
  );
};

export default Player;
