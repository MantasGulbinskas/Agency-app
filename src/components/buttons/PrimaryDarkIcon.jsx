import React from "react";
import styled from "styled-components";
export const PrimaryDarkIcon = (props) => {
    return <Icon>
        <Images  src={props.img} alt={props.img}/>
    </Icon>
}

const Icon = styled.p`
  position: relative;
  margin-top: 112px;
  width: 48px;
  height: 48px;
  background: #B550F8;
  border-radius: 24px;
    `

const Images = styled.img`
position: absolute;
  bottom: 0;
  right: 6px;
    `