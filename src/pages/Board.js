import React from "react";
import Nav from "../components/Nav";
import Modal from "../components/Modal";
import Boardcard from "../components/Boardcard";
import { createModalState } from "../globalstate/atoms";
import { useRecoilState } from "recoil";
import Flex from "../components/Flex";

function Board() {
  const [createModalIsOpen, setCreateModalIsOpen] = useRecoilState(
    createModalState
  );

  const boardObject = { title: "Your Card", items: ["item1", "item2"] };

  return (
    <>
      <Nav />
      <Flex justifyCenter>
        <Boardcard boardObject={boardObject} />
      </Flex>
      {createModalIsOpen && <Modal></Modal>}
    </>
  );
}

export default Board;
