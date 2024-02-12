import React from "react";
import styled from "@emotion/styled";
import axios from "../axios";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
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

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const WarningText = styled.p`
  color: #fde4c3;
  padding: 2rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: ${(props) => (props.danger ? "red" : "#fde4c3")};
  color: ${(props) => (props.danger ? "#fff" : "#000")};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.danger ? "rgb(158, 21, 11)" : "#000"};
    color: ${(props) => (props.danger ? "#fff" : "#fde4c3")};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const DeleteMusic = ({ music, onClose }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/musics/${music.id}`);
    } catch (error) {
      console.error("Error deleting music:", error);
    }
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>Confirm Delete</Title>
        <WarningText>
          Are you sure you want to delete the song "{music.musicTitle}"?
        </WarningText>
        <ButtonWrapper>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleDelete} danger>
            Confirm
          </Button>
        </ButtonWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default DeleteMusic;
