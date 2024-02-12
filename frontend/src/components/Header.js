import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHome, faMusic } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: #000;
  padding: 0 10px;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;
const Logo = styled.div`
  color: #fde4c3;
  font-weight: 600;
  font-size: 32px;
`;
const Navs = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin-right: 1rem;
`;

const Text = styled.li`
  font-size: 24px;
  font-weight: 500;

  &:hover {
    color: #fde4c3;
  }
  &:active {
    border-bottom: 1px solid #fde4c3;
  }
`;

const Header = () => {
  return (
    <Container>
      <Link style={{ textDecoration: "none", color: "white" }} to="/">
        <Logo>MuZiQa</Logo>
      </Link>
      <Navs>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <Text>
            <FontAwesomeIcon icon={faHome} /> Home
          </Text>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/musics">
          <Text>
            {" "}
            <FontAwesomeIcon icon={faMusic} /> Musics
          </Text>
        </Link>
        {/* <Link
          style={{
            textDecoration: "none",
            color: "white",
          }}
          to="/favorites"
        >
          <Text>
            <FontAwesomeIcon icon={faHeart} /> Favorites
          </Text>
        </Link> */}
      </Navs>
    </Container>
  );
};

export default Header;
