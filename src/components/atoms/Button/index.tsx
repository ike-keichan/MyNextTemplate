import styled from "styled-components";

import { ButtonProps } from "./types";
import { colors } from "@/styles/colors";

const { COLOR_61CACE, COLOR_FFFFFF } = colors;

export const Button = styled.button<ButtonProps>`
    background-color:${COLOR_61CACE};
    border-color: transparent;
    cursor: pointer;
    color: ${COLOR_FFFFFF};
    font-size: 20px;
    text-align: center;
    padding: 15px 0;
    width 100%;
`;
