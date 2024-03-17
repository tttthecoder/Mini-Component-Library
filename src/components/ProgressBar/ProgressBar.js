/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

// const ProgressBar = ({ value, size }) => {
//   return <ProgressBarWrapper>
//     <VisuallyHidden>
//       <strong>{value}%</strong>
//     </VisuallyHidden>
//     <StyledProgress size={size} value={value} max={100} ></StyledProgress >
//     {/* <StyledProgress size={"large"} value={value} max={100} ></StyledProgress > */}
//   </ProgressBarWrapper>
// };
// export default ProgressBar;
// const ProgressBarWrapper = styled.div`
// /* someStyle */
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   width: 500px;
// `;
// const StyledProgress = styled.progress`
// /* progressStyle */
// width: 60%;
// height: ${
//   //f
//   props =>
//     // the end value that the function returns will be used to replace ${}!
//     props.size === "medium" ? "20px" :
//       props.size === "small" ? "15px" : "30px"
//   };
// border: transparent;
// &::-webkit-progress-value {
// border-top-left-radius: .60rem;
// border-bottom-left-radius: .60rem;
// border-top-right-radius: ${props =>
//     props.value <= 97 ? "0" : props.value <= 99.8 ? "0.5rem" : ".60rem"
//   };
// border-bottom-right-radius:${props =>
//     props.value <= 97 ? "0" : props.value <= 99.8 ? "0.5rem" : ".60rem"
//   };
// background-color: ${COLORS.primary};
// }
// &::-webkit-progress-bar{ 
//   box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
//   padding: ${
//   props =>
//     props.size === "large" ? "4px 4px" : "0 0"
//   };
//   border-radius: .75rem .75rem;
//   background: ${COLORS.gray50}; 
// }
// `;

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4
  },
  large: {
    height: 24,
    padding: 4,
    radius: 8,
  },
}
const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  return <Wrapper role="progressbar" aria-valuemax={100} aria-valuemin={0} aria-valuenow={value} style={{ "--padding": styles.padding + "px" , "--radius": styles.radius +'px'}}>
    <VisuallyHidden>
      {value}%
    </VisuallyHidden>
    <TruncatingDiv>
      <Progress style={{ "--width": value + "%", "--height": styles.height + "px" }} />
    </TruncatingDiv>
  </Wrapper>
};
export default ProgressBar;
const Progress = styled.div`
width:var(--width);
height:var(--height);
background-color: ${COLORS.primary}
`
const TruncatingDiv = styled.div`
border-radius: 4px 4px;
overflow: hidden;
`
const Wrapper = styled.div`
background-color: ${COLORS.gray50};
border-radius: var(--radius) var(--radius);
padding: var(--padding) var(--padding);
box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`
