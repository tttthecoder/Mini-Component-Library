import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
const STYLES = {
  small: {
    height: 24,
    padding: 4,
    iconSize: 16,
    "padding-left": 24,
    border: 1,
    "font-size": 14,
  },
  large: {
    height: 36,
    padding: 8,
    "padding-left": 36,
    iconSize: 24,
    border: 2,
    "font-size": 18,
  }
}
const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];
  return <>
    <VisuallyHidden>
      <StyledLabel>{label}
      </StyledLabel>
    </VisuallyHidden>
    <Wrapper style={{ "--width": width + "px", "--height": styles.height + "px", "--border": styles.border + "px" }}>
      <IconWrapper>
        <Icon size={styles.iconSize} strokeWidth={styles.border} id={icon} />
      </IconWrapper>
      <Input placeholder={placeholder} style={{ "--font-size": styles["font-size"] + "px", "--padding-left": styles["padding-left"] + "px", "--general-padding": styles.padding + 'px', "--padding-bottom": (styles.padding - styles.border) + "px" }}></Input>
    </Wrapper>
  </>
};
const StyledLabel = styled.label`
display: block;
`
export default IconInput;
const Input = styled.input`
border: none;
display: block;
&:focus {
  outline-offset: 2px;
};
font-size: var(--font-size);
padding: var(--general-padding);
padding-bottom: var(--padding-bottom);
padding-left: var(--padding-left);
width: 100%;
height: 100%;
border-bottom: var(--border) solid black;
`
const Wrapper = styled.div`
color: ${COLORS.gray700};
& input {
  color: ${COLORS.gray700};
  font-weight: 700;
}
&:hover input, &:hover {
  color: black;
}
& input::placeholder {
  font-weight: 400;
}
position: relative;
width: var(--width);
height: var(--height);
font-size: 700;
`
const IconWrapper = styled.div`
position: absolute;
height: fit-content;
width: fit-content;
top: 0;
bottom: 0;
left: 0;
margin-top: auto;
margin-bottom: auto;
pointer-events: none;
`