import React from "react";
import Nav from "../components/Nav";
import Modal from "../components/Modal";
import { createModalState } from "../globalstate/atoms";
import { useRecoilState } from "recoil";
function Board() {
  const [createModalIsOpen, setCreateModalIsOpen] = useRecoilState(
    createModalState
  );
  return (
    <>
      <Nav />
      {createModalIsOpen && <Modal></Modal>}
    </>
  );
}

export default Board;
