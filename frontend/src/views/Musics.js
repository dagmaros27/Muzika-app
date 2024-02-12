import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import "../styles/musiclist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import AddMusicModal from "../components/AddMusic";
import EditMusicModal from "../components/EditMusic";
import DeleteMusicModal from "../components/DeleteMusic";
import axios from "../axios";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: #1c1c1c;
  padding: 2rem 2rem;
  height: calc(100vh - 60px);
  position: relative;
`;

const Title = styled.h1`
  border-bottom: 0.5px solid #fde4c3;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 72vh;
  overflow-y: auto;
`;

const Table = styled.table`
  width: 100%;
`;

const Row = styled.tr`
  border-bottom: 1px solid #f3f3f3;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  & :hover {
    cursor: pointer;
  }
`;

const MusicName = styled.h4`
  color: #fde4c3;
`;

const ArtistName = styled.p`
  color: #fde4c3;
  font-size: 12px;
`;

const MusicInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

const Image = styled.img`
  object-fit: contain;
  border-radius: 5px;
  max-height: 80px;
  max-width: 150px;
`;

const Cell = styled.td`
  display: flex;
  width: ${(props) => props.width}%;
  align-items: center;
  gap: 1rem;
`;

const Headers = styled.th`
  color: #fde4c3;
  width: ${(props) => props.width}%;
  text-align: left;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #fde4c3;
  color: #1c1c1c;
  font-weight: 600;
  font-size: 1rem;
  position: absolute;
  top: 2rem;
  right: 5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1c1c1c;
    color: #fde4c3;
    border: 1px solid #fde4c3;
  }
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #f6f6f6;
  color: #1c1c1c;
  font-weight: 600;

  &:hover {
    background-color: #1c1c1c;
    color: #fde4c3;
    border: 1px solid #fde4c3;
  }
`;

const Musics = () => {
  const navigate = useNavigate();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const [musics, setMusics] = useState([]);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openDeleteModal = () => {
    setIsDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModal(false);
  };

  const handleClick = (musicId) => {
    navigate(`/play/${musicId}`);
  };

  useEffect(() => {
    async function getMusics() {
      await axios
        .get("/musics")
        .then((response) => setMusics(response?.data))
        .catch((error) => console.log(error));
    }

    getMusics();
  }, [musics]);
  return (
    <Container>
      <Title>
        Music List
        <Button onClick={openAddModal}>
          <FontAwesomeIcon icon={faAdd} /> Add Music{" "}
        </Button>
      </Title>
      {isAddModalOpen && <AddMusicModal onClose={closeAddModal} />}
      <Wrapper>
        <Table>
          <thead>
            <Row>
              <Headers width={10}>#</Headers>
              <Headers width={60}>Title</Headers>
              <Headers width={15}>Album</Headers>
              <Headers
                width={15}
                style={{ display: "flex", justifyContent: "center" }}
              >
                Actions
              </Headers>
            </Row>
          </thead>
          <tbody>
            {musics?.map((music, index) => {
              return (
                <Row key={index}>
                  {isEditModalOpen && (
                    <EditMusicModal onClose={closeEditModal} music={music} />
                  )}

                  {isDeleteModal && (
                    <DeleteMusicModal
                      onClose={closeDeleteModal}
                      music={music}
                    />
                  )}
                  <Cell width={10}>{index + 1}</Cell>

                  <Cell width={60} onClick={() => handleClick(music.id)}>
                    <Image
                      src={
                        music.albumPicture
                          ? music.albumPicture
                          : "https://previews.123rf.com/images/asmati/asmati1605/asmati160500378/56590257-music-note-sign-sticker-style-icon-with-shadow-on-gray.jpg"
                      }
                      alt={music.musicTitle}
                    />
                    <MusicInfo>
                      <MusicName>{music.musicTitle}</MusicName>
                      <ArtistName>{music.artistName}</ArtistName>
                    </MusicInfo>
                  </Cell>
                  <Cell width={15}>
                    <ArtistName style={{ fontWeight: 500 }}>
                      {music.albumTitle}
                    </ArtistName>
                  </Cell>
                  <Cell
                    width={15}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ActionButton onClick={openEditModal}>Edit</ActionButton>
                    <ActionButton onClick={openDeleteModal}>
                      Delete
                    </ActionButton>
                  </Cell>
                </Row>
              );
            })}
          </tbody>
        </Table>
      </Wrapper>
    </Container>
  );
};

export default Musics;
