import React from "react";
import styled from "styled-components";
import { createModalState } from "../globalstate/atoms";
import { useRecoilState } from "recoil";

const ModalWindow = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  opacity: 1;
  transition: all 0.3s;

  > div {
    max-width: 400px;
    width: 80vw;
    position: absolute;
    top: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: #fff;
    border-radius: 5px;
  }
  header {
    font-weight: bold;
  }
  h1 {
    text-align: center;
    font-size: 150%;
    margin: 0 0 15px;
  }
`;

const ModalClose = styled.div`
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

function Modal() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useRecoilState(
    createModalState
  );
  const handleCloseModal = () => {
    console.log("modal is now closed");
    setIsCreateModalOpen(false);
  };
  return (
    <ModalWindow>
      <div>
        <ModalClose onClick={handleCloseModal}>Close</ModalClose>
        <h1>Create a Board</h1>
      </div>
    </ModalWindow>
  );
}

export default Modal;
