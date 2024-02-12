import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "../axios";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  min-width: 30vw;
  background-color: #1c1c1c;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #fff;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const Button = styled.button`
  background-color: #fde4c3;
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fde4c3;
  }
`;

const EditMusic = ({ onClose, music }) => {
  const [musicData, setMusicData] = useState({
    musicTitle: "",
    artistName: "",
    albumName: "",
    albumCover: "",
  });

  useEffect(() => {
    if (music) {
      setMusicData({
        musicTitle: music.musicTitle,
        artistName: music.artistName,
        albumName: music.albumName,
        albumCover: music.albumCover,
      });
    }
  }, [music]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMusicData({
      ...musicData,
      [name]: value,
    });
  };

  const handleEditMusic = async () => {
    await axios
      .put(`/musics/${music.id}`, musicData)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>Edit Music</Title>
        <InputLabel>Title:</InputLabel>
        <InputField
          type="text"
          name="musicTitle"
          value={musicData.musicTitle}
          onChange={handleInputChange}
          required
        />
        <InputLabel>Artist Name:</InputLabel>
        <InputField
          type="text"
          name="artistName"
          value={musicData.artistName}
          onChange={handleInputChange}
          required
        />
        <InputLabel>Album Name:</InputLabel>
        <InputField
          type="text"
          name="albumName"
          value={musicData.albumName}
          onChange={handleInputChange}
          required
        />
        <InputLabel>Album Cover URL:</InputLabel>
        <InputField
          type="text"
          name="albumCover"
          value={musicData.albumCover}
          onChange={handleInputChange}
          required
        />
        <ButtonWrapper>
          <Button onClick={handleEditMusic}>Save Changes</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ButtonWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditMusic;
