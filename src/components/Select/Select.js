import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  console.log(onChange)
  return (<Wrapper>
    <StyledFakeSelect>
      <div>{displayedValue}</div>
      {/* <div>{displayedValue}s{value}</div> */}
      <Icon id="chevron-down"></Icon>
    </StyledFakeSelect>
    <StyledSelect value={value} onChange={onChange}>
      {children}
    </StyledSelect>
  </Wrapper>
  );
};
export default Select;
const Wrapper = styled.div`
/* display: flex; */
width: max-content;
/* border: 2px solid blueviolet; */
position: relative;
/* &:focus div {
  color: revert;
  background-color: red;
} */
&:hover div {
  color: ${COLORS.black};
}
`
const StyledFakeSelect = styled.div`
pointer-events: none;
color: ${COLORS.gray700};
display: flex;
& div:first-child {
  margin-right: 24px;
};
align-items: center;
background-color: ${COLORS.gray50};
border-radius: 8px; 
padding: 16px;
padding-top: 12px;
padding-bottom: 12px;
font-size: 1rem;
/* width: 100%; */
`
const StyledSelect = styled.select`
-moz-appearance: none;
-webkit-appearance: none;
border-radius: 8px; 
padding: 16px;
position: absolute;
left: 0;
right: 0;
top: 0;
opacity: 0%;
bottom: 0;
&:focus {
  opacity: 100%;
  background-color: transparent;
  color: transparent;
}
`