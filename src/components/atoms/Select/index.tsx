import { VFC } from "react";
import styled from "styled-components";

import { SelectProps } from "./types";
import { colors } from "@/styles/colors";

const { COLOR_61CACE, COLOR_CED2E3, COLOR_FFFFFF } = colors;

export const Select: VFC<SelectProps> = (props) => {
  const { options, ...selectProps } = props;

  return (
    <Root>
      <SelectWrapper>
        <StyledSelect {...selectProps}>
          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      </SelectWrapper>
    </Root>
  );
};

const Root = styled.div`
  position: relative;
`;

const SelectWrapper = styled.div`
  background-color: ${COLOR_FFFFFF};
  border: 1px solid ${COLOR_CED2E3};
  border-radius: 4px;
  height: 26px;

  ::before {
    background-color: ${COLOR_61CACE};
    border-radius: 0 3px 3px 0;
    content: "";
    display: block;
    height: 26px;
    position: absolute;
    pointer-events: none;
    top: 1px;
    right: 1px;
    width: 12px;
  }

  ::after {
    border-bottom: solid 2px ${COLOR_FFFFFF};
    border-right: solid 2px ${COLOR_FFFFFF};
    content: "";
    display: block;
    height: 3px;
    position: absolute;
    pointer-events: none;
    top: 40%;
    transform: rotate(45deg);
    right: 4px;
    width: 3px;
  }
`;

const StyledSelect = styled.select`
  appearance: none;
  border: none;
  cursor: pointer;
  height: 25px;
  width 100%;
`;
