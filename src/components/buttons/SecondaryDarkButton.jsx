import React from "react";
import styled from "styled-components";

export const SecondaryDarkButton = (props) => {
    return <Button>{props.name}</Button>
}

const Button = styled.button`
  width: 170px;
  margin-right: 135px;
  height: 48px;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.295743);
  border-radius: 6px;
  background: none;
    `