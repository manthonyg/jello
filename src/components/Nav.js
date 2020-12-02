import styled from "styled-components";
import React from "react";
import { device } from "../constants/mediaQueries";
import PropTypes from "prop-types";
import { createModalState } from "../globalstate/atoms";
import { useRecoilState } from "recoil";

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

const NavTitle = styled.h3`
  color: #c3c3c3;
  margin: 10px;
`;

const NavListItem = styled.li`
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    transition: 2s all;
    cursor: pointer;
    background-color: #111;
  }

  @media ${device.laptop} {
    background-color: red;
  }
`;

function Nav(props) {
  const [createModalOpen, setCreateModalOpen] = useRecoilState(
    createModalState
  );

  const openCreateModal = () => {
    console.log("Modal is open");
    setCreateModalOpen(true);
  };

  return (
    <NavList>
      <NavTitle>JELLO</NavTitle>
      <NavListItem onClick={openCreateModal}>Create Board</NavListItem>
    </NavList>
  );
}

Nav.propTypes = {
  createBoardFn: PropTypes.func.isRequired,
  deleteBoardFn: PropTypes.func.isRequired,
};

export default Nav;
