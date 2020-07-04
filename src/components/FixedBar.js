import styled from 'styled-components';

import { BREAKPOINT } from '../utils/constants';

export const FixedBar = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 8vh;
  left: auto;
  padding: 0 var(--sides-padding-desktop);
  right: auto;
  top: 0px;
  width: 100%;
  z-index: 999;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 0 var(--sides-padding-mobile);
  }
`;
