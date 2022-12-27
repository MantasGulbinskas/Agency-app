import React from "react";
import styled from "styled-components";


export const PrimaryLightButton = (props) => {
    return (
        <Button>{props.name}</Button>
    )
}

const Button = styled.button`
    width: 170px;
    height: 48px;
    border-radius: 6px;
  border: none;
    background: #EF6D58;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;

`