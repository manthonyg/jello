import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import Button from "./Button";

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 50px 10px 10px 10px;
  width: 300px;
  height: 400px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const CardInput = styled.input`
  padding: 21px 0;
  box-sizing: content-box;
  width: 70%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;
  align-self: center;
  text-align: center;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

const CardContent = styled.div`
  overflow: scroll;
`;

const CardBody = styled.div`
  padding-top: 30px;
  padding-bottom: 10px;
  padding-right: 32px;
  padding-left: 32px;
  margin-top: auto;
`;
const CardTitle = styled.p`
  display: flex;
  align-self: center;
  justify-content: center;
  padding: 7px 0;
  border-bottom: 1px solid #fff;
  width: 70%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
`;

// const boardObject = { title: "Your Card", items: ["item1", "item2"] };

export default function Boardcard({ boardObject }) {
  const [boardContent, setBoardContent] = useState(boardObject);
  const [showTitle, setShowTitle] = useState(true);
  const inputEl = useRef(null);

  const handleAddItem = (e) => {
    const item = "test";
    setBoardContent((prevState) => {
      return { ...prevState, items: prevState.items.concat(item) };
    });
  };

  const handleTitleValue = (event) => {
    const value = event.target.value;
    setBoardContent((prevState) => {
      return {
        ...prevState,
        title: value,
      };
    });
  };
  const handleShowTitle = () => {
    setShowTitle(!showTitle);
  };

  const handleSelectText = (event) => inputEl.current.select();

  const CirlePlus = styled.div`
    height: 6em;
    width: 6em;
    font-size: 1em;
  `;
  const Circle = styled.div`
    position: relative;
    width: 4.5em;
    height: 4.5em;
    border-radius: 100%;
    border: solid 0.8em #dfdad7;
  `;
  const Horizontal = styled.div`
    position: absolute;
    background-color: #dfdad7;
    width: 2.4em;
    height: 0.7em;
    top: 1.9em;
    left: 1.05em;
  `;
  const Veritcal = styled.div`
    position: absolute;
    background-color: #dfdad7;
    width: 0.7em;
    height: 2.4em;
    top: 1.05em;
    left: 1.9em;
  `;
  //   <div class="circle-plus">
  //   <div class="circle">
  //     <div class="horizontal"></div>
  //     <div class="vertical"></div>
  //   </div>
  // </div>

  // .circle-plus {
  //   height: 6em;
  //   width: 6em;
  //   font-size: 1em;
  // }

  // .circle {
  //   position: relative;
  //   width: 4.5em;
  //   height: 4.5em;
  //   border-radius: 100%;
  //   border: solid .8em #DFDAD7;
  // }

  // .horizontal {
  //   position: absolute;
  //   background-color: #DFDAD7;
  //   width: 2.4em;
  //   height: .7em;
  //   top: 1.9em;
  //   left: 1.05em;
  // }

  // .vertical {
  //   position: absolute;
  //   background-color: #DFDAD7;
  //   width: .7em;
  //   height: 2.4em;
  //   top: 1.05em;
  //   left: 1.9em;
  // }

  // .circle-plus {
  //   margin: auto;
  //   padding: 4em 0;
  //   pointer-events: none;
  // }

  return (
    <div>
      <CardWrapper>
        {showTitle ? (
          <CardTitle onClick={handleShowTitle}>{boardContent?.title}</CardTitle>
        ) : (
          <CardInput
            autofocus={true}
            ref={inputEl}
            onChange={handleTitleValue}
            onBlur={handleShowTitle}
            onFocus={handleSelectText}
            value={boardContent?.title}
          ></CardInput>
        )}
        <CardContent>
          {boardContent?.items.map((item) => (
            <p>{item}</p>
          ))}
        </CardContent>
        <CardBody>
          <Button value="Add Item" onClick={handleAddItem}></Button>
        </CardBody>
      </CardWrapper>
    </div>
  );
}
