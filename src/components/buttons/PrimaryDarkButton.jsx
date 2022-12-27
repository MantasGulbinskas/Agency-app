import React from "react";
import styled from "styled-components";

export const PrimaryDarkButton = (props) => {
    return <Button>{props.name}</Button>
}

const Button = styled.button`
  width: 170px;
  height: 48px;
  border:none;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
  background: #B550F8;
  border-radius: 6px;
  color: #FFFFFF;
    `