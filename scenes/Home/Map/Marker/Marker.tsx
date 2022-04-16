import React from "react";
import styled from "styled-components";
import { MapProps } from "../Map.props";

const MarkerWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    border-radius: 40px;
    border: 3px solid white;
    background: ${({ theme }) => theme.color.main.orange};
    color: white;
`;

const Marker = ({ text }: MapProps): JSX.Element => (
    <MarkerWrap>{text}</MarkerWrap>
);

export default Marker;
