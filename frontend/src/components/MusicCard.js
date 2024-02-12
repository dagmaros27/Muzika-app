import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/musiccard.css";
import { faHeadphones, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: #000;
  border-radius: 5px;
  padding: 1em;
  min-height: 300px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
  &:hover img {
    transform: scale(1.01);
  }
`;

const Image = styled.img`
  object-fit: container;
  border-radius: 5px;
  max-height: 250px;
  max-width: 100%;
`;

const Title = styled.h3`
  color: #fde4c3;
`;
const Name = styled.p`
  color: #fde4c3;
  font-size: 12px;
`;
const MusicInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;
const MovieInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MusicIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: end;
`;
const Listners = styled.div`
  display: flex;
  padding-top: 0.5rem;
  gap: 0.5rem;
`;
const MusicCard = ({ music }) => {
  return (
    <Container>
      <Image src={music.albumPicture} />
      <MovieInfoWrapper>
        <MusicInfo>
          <Title>{music.musicTitle}</Title>
          <Name>{music.artistName}</Name>
        </MusicInfo>
        <MusicIcons>
          <Listners>
            <FontAwesomeIcon icon={faHeadphones} color="white" />
            <Name>{music.listenedNumber}</Name>
          </Listners>
          <Link to={"/play/" + music.id}>
            <FontAwesomeIcon
              icon={faPlayCircle}
              color="white"
              size="2x"
              className="play_icon"
            />
          </Link>
        </MusicIcons>
      </MovieInfoWrapper>
    </Container>
  );
};

export default MusicCard;
