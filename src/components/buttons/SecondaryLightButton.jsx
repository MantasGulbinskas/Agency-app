import React from "react";
import styled from "styled-components";

export const SecondaryLightButton = (props) => {
    return <Button>{props.name}</Button>
}

const Button = styled.button`
  width: 170px;
  height: 48px;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
  background: #FFFFFF;
  box-shadow: 0px 3px 9px rgba(57, 20, 0, 0.08);
  border-radius: 6px;
  border: none;
  color: #391400;
    `