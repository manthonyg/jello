import React, { useState } from 'react'
import styled, { css } from "styled-components";
import Button from './Button'

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  height:400px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  display:flex;
  flex-direction:column;
  flex:1;
`;

export const CardBody = styled.div`
  padding-bottom:10px;
  padding-right: 32px;
  padding-left: 32px;
  margin-top:auto;
`;

export default function Boardcard() {
  return (
    <div>
      <CardWrapper>
        <CardBody>
        <Button value="Click Me"></Button>
        </CardBody>
      </CardWrapper>
    </div>
  )
}
